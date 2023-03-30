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
  id?: Maybe<Scalars['String']>;
  reportedId: Scalars['String'];
  user: IUser;
};

export type ICreateInterestInput = {
  name: Scalars['String'];
};

export type ICreateNoticeInput = {
  contents: Scalars['String'];
  title: Scalars['String'];
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

export type IFriend = {
  __typename?: 'Friend';
  id?: Maybe<Scalars['String']>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  opponentId?: Maybe<Scalars['String']>;
};

export type IInterest = {
  __typename?: 'Interest';
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type IInterestInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  addFriend: IFriend;
  blockOpponent: IBlockUser;
  createNotice: INotice;
  createQuestion: IQuestion;
  createUser: IUser;
  createUserInterest: IInterest;
  deleteFriend: Scalars['Boolean'];
  deleteQuestion: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  passwordResetMailer: Scalars['String'];
  reportOpponent: IUser;
  restoreAccessToken: Scalars['String'];
  saveUserLocation: Scalars['String'];
  sendMailForVerification: Scalars['String'];
  unblockOpponent: IBlockUser;
  updateUser: IUser;
  updateUserPwd: IUser;
  uploadFile: Scalars['String'];
  verifyEmail: Scalars['Boolean'];
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


export type IMutationCreateNoticeArgs = {
  createNoticeInput: ICreateNoticeInput;
};


export type IMutationCreateQuestionArgs = {
  createQuestionInput: ICreateQuestionInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationCreateUserInterestArgs = {
  createInterestInput: ICreateInterestInput;
};


export type IMutationDeleteFriendArgs = {
  opponentId: Scalars['String'];
};


export type IMutationDeleteQuestionArgs = {
  questionId: Scalars['String'];
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
  userId: Scalars['String'];
};


export type IMutationSaveUserLocationArgs = {
  location: ISaveUserLocationInput;
};


export type IMutationSendMailForVerificationArgs = {
  email: Scalars['String'];
};


export type IMutationUnblockOpponentArgs = {
  blockUserId: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserPwdArgs = {
  password: Scalars['String'];
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type IMutationVerifyEmailArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type INotice = {
  __typename?: 'Notice';
  contents: Scalars['String'];
  number: Scalars['Int'];
  title: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchBlockAllOpponent: Array<IBlockUser>;
  fetchBlockOneOpponent: IBlockUser;
  fetchFriends: Array<IFriend>;
  fetchId: IUser;
  fetchInterests: Array<IInterest>;
  fetchLoginUser: IUser;
  fetchNotices?: Maybe<Array<INotice>>;
  fetchOneByInterest: IInterest;
  fetchQuestion: IQuestion;
  fetchQuestions: Array<IQuestion>;
  fetchUser: IUser;
  findAroundUsers: Array<IUserWithLocation>;
};


export type IQueryFetchBlockOneOpponentArgs = {
  blockUserId: Scalars['String'];
};


export type IQueryFetchIdArgs = {
  email: Scalars['String'];
};


export type IQueryFetchOneByInterestArgs = {
  interestId: Scalars['String'];
};


export type IQueryFetchQuestionArgs = {
  questionId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  id: Scalars['String'];
};


export type IQueryFindAroundUsersArgs = {
  bothLocation: IFindAroundUserInput;
  interest?: InputMaybe<Scalars['String']>;
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
  interests?: InputMaybe<IInterestInput>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']>;
  createAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  interests: IInterest;
  nickname: Scalars['String'];
  provider: Scalars['String'];
  reported?: Maybe<Scalars['Int']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type IUserWithLocation = {
  __typename?: 'UserWithLocation';
  age?: Maybe<Scalars['Int']>;
  createAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  interests: IInterest;
  lat: Scalars['String'];
  lng: Scalars['String'];
  nickname: Scalars['String'];
  provider: Scalars['String'];
  reported?: Maybe<Scalars['Int']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};
