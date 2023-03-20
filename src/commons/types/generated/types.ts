export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type ICreateUserInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type IFindAroundUserInput = {
  lat1: Scalars['Float'];
  lat2: Scalars['Float'];
  lng1: Scalars['Float'];
  lng2: Scalars['Float'];
};

export type IFindAroundUserOutput = {
  __typename?: 'FindAroundUserOutput';
  age: Scalars['Int'];
  createAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  interest: Scalars['String'];
  lat: Scalars['String'];
  lng: Scalars['String'];
  nickname: Scalars['String'];
  provider: Scalars['String'];
  reported: Scalars['Int'];
  updateAt: Scalars['DateTime'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createUser: IUser;
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  saveUserLocation: Scalars['String'];
  updateUser: IUser;
  updateUserPwd: IUser;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSaveUserLocationArgs = {
  location: ISaveUserLocationInput;
};


export type IMutationUpdateUserArgs = {
  updateAllInput: IUpdateAllInput;
};


export type IMutationUpdateUserPwdArgs = {
  updateUserPwdInput: IUpdateUserPwdInput;
};

export type IQuery = {
  __typename?: 'Query';
  fetchId: IUser;
  fetchLoginUser: IUser;
  findAroundUsers: Array<IFindAroundUserOutput>;
};


export type IQueryFetchIdArgs = {
  email: Scalars['String'];
};


export type IQueryFindAroundUsersArgs = {
  bothLocation: IFindAroundUserInput;
};

export type ISaveUserLocationInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type IUpdateAllInput = {
  image: Scalars['String'];
  interest: Scalars['String'];
};

export type IUpdateUserPwdInput = {
  password: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  age: Scalars['Int'];
  createAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  interest: Scalars['String'];
  nickname: Scalars['String'];
  provider: Scalars['String'];
  reported: Scalars['Int'];
  updateAt: Scalars['DateTime'];
};
