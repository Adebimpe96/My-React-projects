import sessionStore from 'store/sessionStore';
import aes from './aes';
import { IAuthData } from './models';

const AUTH_STORE_KEY = 'authData';
const LOGIN_ID = 'loginId';
export const SESSION_START = 'sessionStart';
export const ROLE = 'role';
export const MENU_DATA = 'menuData';
interface IPermissionData {
  isDashBoard: boolean;
  isTransfers: boolean;
  isPrepaidCardLoad: boolean;
  isBillPayments: boolean;
  isMobileMoney: boolean;
  isFXTransfersAndRates:boolean;
  isBankStatements: boolean;
  isScheduleTransfers: boolean;
  isTransactionreports: boolean;
  isBeneficiaries: boolean;
  isPendingRequests: boolean;
  isMyRequests: boolean;
}

const initialPermissionaData: IPermissionData = {
  isDashBoard: true,
  isTransfers: false,
  isPrepaidCardLoad: false,
  isBillPayments: false,
  isMobileMoney: false,
  isFXTransfersAndRates: false,
  isBankStatements: false,
  isScheduleTransfers: false,
  isTransactionreports: false,
  isBeneficiaries: false,
  isPendingRequests: false,
  isMyRequests: false,
};
const permissionMapping = {
  DashBoard: 'isDashboard',
  Transfers: 'isTransfers',
  'Prepaid Card Load': 'isPrepaidCardLoad',
  'Bill Payments': 'isBillPayments',
  'Mobile Money': 'isMobileMoney',
  'FX Transfers and Rates': 'isFXTransfersAndRates',
  'Bank Statements': 'isBankStatements',
  'Schedule Transfers': 'isScheduleTransfers',
  'Transaction reports': 'isTransactionreports',
  Beneficiaries: 'isBeneficiaries',
  'Pending Requests': 'isPendingRequests',
  'My Requests': 'isMyrequests',
};
const updatePermissions = (permissionArray: string[] | null, permissionData: IPermissionData) => {
  if (!permissionArray) {
    return permissionData;
  }
  const updatedPermissionData = { ...permissionData };

  permissionArray.forEach((permission) => {
    const key = permissionMapping[permission] as keyof IPermissionData;

    if (key && key in updatedPermissionData) {
      updatedPermissionData[key] = true;
    }
  });

  return updatedPermissionData;
};


class Auth {
  private authData: IAuthData | null = null;

  private permissionsData: IPermissionData = initialPermissionaData;

  constructor() {
    this.refresh();
  }

  // getter && setter for AuthData
  get data(): IAuthData | null {
    return this.authData;
  }

  set data(data: IAuthData | null) {
    this.authData = data;
    const storageData = aes.encrypt(JSON.stringify(data));
    localStorage.setItem(AUTH_STORE_KEY, storageData);
    localStorage.setItem(LOGIN_ID, data?.loginId || '');
  }

  // Getter&Setter for permissions
  get permissions(): IPermissionData {
    return this.permissionsData;
  }

  set permissions(data: IPermissionData) {
    this.permissionsData = data;
  }

  login(data: IAuthData) {
    this.authData = data;
    const menuArray = data.menus.map((item) => item.title);
    this.permissionsData = updatePermissions(menuArray, this.permissionsData);
    const storageData = aes.encrypt(JSON.stringify(this.authData));
    localStorage.setItem(AUTH_STORE_KEY, storageData);
    localStorage.setItem(LOGIN_ID, data.loginId);
    localStorage.setItem(ROLE, data.roles.name);
    localStorage.setItem(SESSION_START, JSON.stringify(Date.now()));
    localStorage.setItem(MENU_DATA, JSON.stringify(menuArray));
    sessionStore.setSessionTimeout(false);
  }

  logout() {
    this.authData = null;
    localStorage.removeItem(AUTH_STORE_KEY);
    localStorage.removeItem(LOGIN_ID);
    localStorage.removeItem(SESSION_START);
    localStorage.removeItem(ROLE);
    localStorage.removeItem(MENU_DATA);
    localStorage.removeItem('userName');
  }

  refresh() {
    const encData = localStorage.getItem(AUTH_STORE_KEY);
    if (encData) {
      this.authData = JSON.parse(aes.decrypt(encData)) as IAuthData;
    } else {
      this.authData = null;
    }
    const permissionStoreData = localStorage.getItem(MENU_DATA);
    this.permissionsData = updatePermissions(JSON.parse(permissionStoreData as string) as string[],
      this.permissionsData);
  }
}

export default new Auth();
