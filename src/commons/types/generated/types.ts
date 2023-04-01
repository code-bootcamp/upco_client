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

export type IBlock = {
  __typename?: 'Block';
  blocked_user: IUser;
  blocker: IUser;
  id: Scalars['String'];
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
  id: Scalars['String'];
  receiver: IUser;
  sender: IUser;
  status: Scalars['Boolean'];
};

export type IInterest = {
  __typename?: 'Interest';
  id: Scalars['String'];
  name: Scalars['String'];
  user?: Maybe<Array<IUser>>;
};

export type IMutation = {
  __typename?: 'Mutation';
  acceptFriendRequest: Array<IFriend>;
  blockUser: IBlock;
  createDefaultInterests: Scalars['String'];
  createFriendRequest: IFriend;
  createNotice: INotice;
  createQuestion: IQuestion;
  createUser: IUser;
  deleteFriend: Scalars['Boolean'];
  deleteQuestion: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  rejectFriendRequest: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  saveUserLocation: Scalars['String'];
  sendMailForVerification: Scalars['String'];
  unblockUser: IBlock;
  updateUser: IUser;
  updateUserPwd: IUser;
  uploadFile: Scalars['String'];
  verifyEmail: Scalars['Boolean'];
};


export type IMutationAcceptFriendRequestArgs = {
  requestId: Scalars['String'];
};


export type IMutationBlockUserArgs = {
  blockedUserId: Scalars['String'];
};


export type IMutationCreateFriendRequestArgs = {
  receiverId: Scalars['String'];
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


export type IMutationDeleteFriendArgs = {
  friendId: Scalars['String'];
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


export type IMutationRejectFriendRequestArgs = {
  requestId: Scalars['String'];
};


export type IMutationSaveUserLocationArgs = {
  location: ISaveUserLocationInput;
};


export type IMutationSendMailForVerificationArgs = {
  email: Scalars['String'];
};


export type IMutationUnblockUserArgs = {
  blockId: Scalars['String'];
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
  fetchBlockUsers: Array<IBlock>;
  fetchFriendRequests: Array<IFriend>;
  fetchFriends: Array<IUser>;
  fetchLoginUser: IUser;
  fetchNotices?: Maybe<Array<INotice>>;
  fetchQuestion: IQuestion;
  fetchQuestions: Array<IQuestion>;
  fetchUser: IUser;
  findAroundUsers: Array<IUserWithLocation>;
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
  interests?: InputMaybe<Array<Scalars['String']>>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']>;
  createAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  interests?: Maybe<Array<IInterest>>;
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
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  interests?: Maybe<Array<IInterest>>;
  lat: Scalars['String'];
  lng: Scalars['String'];
  nickname: Scalars['String'];
  provider: Scalars['String'];
  reported?: Maybe<Scalars['Int']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};
