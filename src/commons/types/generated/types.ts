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
  Upload: any;
};

export type IBlockUser = {
  __typename?: 'BlockUser';
  blockUserId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  reportedId: Scalars['String'];
  user: IUser;
};

export type ICreateQuestionInput = {
  contents: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateUserInput = {
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
  reported?: Maybe<Scalars['Int']>;
  updateAt: Scalars['DateTime'];
};

export type IFriend = {
  __typename?: 'Friend';
  createAt: Scalars['DateTime'];
  id: Scalars['String'];
  isSuccess: Scalars['Boolean'];
  opponentId: Scalars['String'];
  user: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  addFriend: IFriend;
  blockOpponent: IBlockUser;
  createQuestion: IQuestion;
  createUser: IUser;
  deleteFriend: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  passwordResetMailer: Scalars['String'];
  reportOpponent: IUser;
  restoreAccessToken: Scalars['String'];
  saveUserLocation: Scalars['String'];
  unblockOpponent: Scalars['Boolean'];
  updateUser: IUser;
  uploadFile: Scalars['String'];
};


export type IMutationAddFriendArgs = {
  isSuccess: Scalars['Boolean'];
  opponentId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationBlockOpponentArgs = {
  blockUserId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCreateQuestionArgs = {
  createQuestionInput: ICreateQuestionInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteFriendArgs = {
  opponentId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationPasswordResetMailerArgs = {
  email: Scalars['String'];
};


export type IMutationReportOpponentArgs = {
  reportedId: Scalars['String'];
};


export type IMutationSaveUserLocationArgs = {
  location: ISaveUserLocationInput;
};


export type IMutationUnblockOpponentArgs = {
  blockUserId: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchBlockAllOpponent: Array<IBlockUser>;
  fetchBlockOneOpponent: IBlockUser;
  fetchFriends: Array<IFriend>;
  fetchId: IUser;
  fetchLoginUser: IUser;
  fetchQuestions: Array<IQuestion>;
  findAroundUsers: Array<IFindAroundUserOutput>;
};


export type IQueryFetchBlockOneOpponentArgs = {
  blockUserId: Scalars['String'];
};


export type IQueryFetchIdArgs = {
  email: Scalars['String'];
};


export type IQueryFindAroundUsersArgs = {
  bothLocation: IFindAroundUserInput;
};

export type IQuestion = {
  __typename?: 'Question';
  contents: Scalars['String'];
  createAt: Scalars['DateTime'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type ISaveUserLocationInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type IUpdateUserInput = {
  age?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  interest?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  reported?: InputMaybe<Scalars['Int']>;
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
  reported?: Maybe<Scalars['Int']>;
  updateAt: Scalars['DateTime'];
};
