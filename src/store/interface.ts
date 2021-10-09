/** 定义state类型定义 */

export interface RootStateTypes {
  narBool: boolean;
  name: string;
}

export interface globalModuleTypes {
  count: number;
  hoppy: string;
  navSwitch: boolean;
}

export interface userModleTypes {
  profile: {
    id?: string,
    avatar?: string,
    nickname?: string,
    account?: string,
    mobile?: string,
    token?: string
  }
}

export interface categoryModleTypes {
  list: any
}

export interface AllStateTypes extends RootStateTypes {
  globalModule: globalModuleTypes;
  userModule: userModleTypes;
  categoryModule: categoryModleTypes
}
