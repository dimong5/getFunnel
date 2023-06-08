/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export enum AuthErrorTypes {
  BAD_CONFIRM_REQUEST = "BAD_CONFIRM_REQUEST",
  BAD_REQUEST = "BAD_REQUEST",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR",
  TWO_FACTOR_WRONG_CODE = "TWO_FACTOR_WRONG_CODE",
  TWO_MANY_ATTEMPTS = "TWO_MANY_ATTEMPTS",
  UNAUTHORIZED = "UNAUTHORIZED",
  UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  WRONG_CONFIRM_CODE = "WRONG_CONFIRM_CODE",
  WRONG_SECRET = "WRONG_SECRET",
}

export enum AuthSource {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
  SOCIAL = "SOCIAL",
}

export interface CalculateUpgradeInputType {
  annual?: InputMaybe<Scalars["Boolean"]>;
  planId?: InputMaybe<Scalars["UUID"]>;
  prices: Array<CostInputType>;
}

export interface ChangePasswordInputType {
  newPassword: Scalars["String"];
  oldPassword: Scalars["String"];
}

export interface CheckConfirmRequestInputType {
  code: Scalars["String"];
  id: Scalars["UUID"];
}

export interface ComponentDataInputType {
  componentId?: InputMaybe<Scalars["UUID"]>;
  customData?: InputMaybe<Scalars["JSON"]>;
  elementId?: InputMaybe<Scalars["UUID"]>;
  mainElementId?: InputMaybe<Scalars["UUID"]>;
  nextStepId?: InputMaybe<Scalars["UUID"]>;
  sort?: InputMaybe<Scalars["Float"]>;
  stepId?: InputMaybe<Scalars["UUID"]>;
  title?: InputMaybe<Scalars["String"]>;
  type: ComponentType;
}

export enum ComponentType {
  BUTTON = "BUTTON",
  CALENDAR = "CALENDAR",
  CUSTOM = "CUSTOM",
  FEEDBACK = "FEEDBACK",
  FORM = "FORM",
  LEAD_FORM = "LEAD_FORM",
  LIKE = "LIKE",
  LINK = "LINK",
  MESSENGER = "MESSENGER",
  PAGE = "PAGE",
  PHONE = "PHONE",
  RATING = "RATING",
  REACTIONS = "REACTIONS",
  SOCIAL = "SOCIAL",
  USER_FILE = "USER_FILE",
  VIDEO = "VIDEO",
}

export enum ConfirmType {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
}

export interface CostInputType {
  priceId: Scalars["UUID"];
  quantity: Scalars["Float"];
}

export interface CreateComponentInputType {
  data: CreateComponentPayload;
  funnelId: Scalars["UUID"];
}

export interface CreateComponentPayload {
  data: ComponentDataInputType;
}

export interface CreateConfirmRequestInputType {
  type: ConfirmType;
  value: Scalars["String"];
}

export interface CreateElementInputType {
  data: CreateElementPayload;
  funnelId: Scalars["UUID"];
}

export interface CreateElementPayload {
  data: ElementDataInputType;
}

export interface CreateEventMessageInputType {
  componentId?: InputMaybe<Scalars["UUID"]>;
  eventType: VisitorEventType;
  payload?: InputMaybe<PayloadInputType>;
  stepId?: InputMaybe<Scalars["UUID"]>;
  tenantId: Scalars["UUID"];
  visitId: Scalars["UUID"];
}

export interface CreateFunnelDataInputType {
  title: Scalars["String"];
}

export interface CreateFunnelInputType {
  data: CreateFunnelDataInputType;
}

export interface CreateGroupInputType {
  funnelId: Scalars["UUID"];
  sort: Scalars["Float"];
  title: Scalars["String"];
}

export interface CreateManyComponentsInputType {
  data: Array<CreateComponentPayload>;
  funnelId: Scalars["UUID"];
}

export interface CreateManyResultsMessageInputType {
  items: Array<ResultInputType>;
  tenantId: Scalars["UUID"];
  visitId: Scalars["UUID"];
}

export interface CreateResultMessageInputType {
  componentId: Scalars["UUID"];
  payload: PayloadInputType;
  stepId?: InputMaybe<Scalars["UUID"]>;
  tenantId: Scalars["UUID"];
  type: VisitorResultType;
  visitId: Scalars["UUID"];
}

export interface CreateStepInputType {
  data: CreateStepPayloadInputType;
  funnelId: Scalars["UUID"];
}

export interface CreateStepPayloadInputType {
  data: StepDataInputType;
  type: StepType;
}

export interface CreateStyleInputPayload {
  componentId?: InputMaybe<Scalars["UUID"]>;
  data: StyleDataInputType;
  elementId?: InputMaybe<Scalars["UUID"]>;
  type: StyleType;
}

export interface CreateStyleInputType {
  data: CreateStyleInputPayload;
  funnelId: Scalars["UUID"];
  tenantId: Scalars["UUID"];
}

export interface CreateVisitInputType {
  fingerprint: Scalars["String"];
  funnelId: Scalars["UUID"];
  funnelSnapshotId: Scalars["UUID"];
  params?: InputMaybe<VisitParamsInputType>;
  referer: Scalars["String"];
  tenantId: Scalars["UUID"];
  utm?: InputMaybe<Array<VisitUtmInputType>>;
}

export interface DeleteComponentInputType {
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
}

export interface DeleteElementInputType {
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
}

export interface DeleteFunnelInputType {
  force?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["UUID"];
}

export interface DeleteGroupInputType {
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
  tenantId: Scalars["UUID"];
}

export interface DeleteManyStepsInputType {
  funnelId: Scalars["UUID"];
  ids: Array<Scalars["UUID"]>;
}

export interface DeleteStepInputType {
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
}

export interface DeleteStyleInputType {
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
}

export interface ElementDataInputType {
  componentId?: InputMaybe<Scalars["UUID"]>;
  customData?: InputMaybe<Scalars["JSON"]>;
  elementId?: InputMaybe<Scalars["UUID"]>;
  sort?: InputMaybe<Scalars["Float"]>;
  type?: InputMaybe<ElementType>;
}

export enum ElementType {
  BUTTON = "BUTTON",
  ICON = "ICON",
  INPUT_FILE = "INPUT_FILE",
  INPUT_LABEL = "INPUT_LABEL",
  INPUT_TEXT = "INPUT_TEXT",
  INPUT_TEXTAREA = "INPUT_TEXTAREA",
  OVERLAY = "OVERLAY",
  TEXT = "TEXT",
  VIDEO = "VIDEO",
}

export enum FileType {
  AUDIO = "AUDIO",
  DOCUMENT = "DOCUMENT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

export interface GetAllFunnelsInputType {
  deleted?: InputMaybe<Scalars["Boolean"]>;
}

export interface GetFileInputType {
  id: Scalars["UUID"];
  tenantId: Scalars["UUID"];
}

export interface GetFunnelInputType {
  id: Scalars["UUID"];
  snapshotId?: InputMaybe<Scalars["UUID"]>;
}

export interface GetIntegrationsInputType {
  funnelId: Scalars["UUID"];
  tenantId: Scalars["UUID"];
}

export interface GetOgData {
  url: Scalars["String"];
}

export interface GetPlansInputType {
  country?: InputMaybe<Scalars["String"]>;
  currency: Scalars["String"];
}

export interface GetTrackersInputType {
  funnelId: Scalars["UUID"];
  tenantId: Scalars["UUID"];
}

export interface GetVisitInputType {
  id: Scalars["UUID"];
}

export interface GetVisitsInputType {
  funnelId: Scalars["UUID"];
  pagination: PaginationInputType;
}

export interface GroupDataInputType {
  customData?: InputMaybe<Scalars["JSON"]>;
  parentId?: InputMaybe<Scalars["String"]>;
  sort: Scalars["Float"];
  title: Scalars["String"];
}

export interface Handle3dsInputType {
  payload: Scalars["JSON"];
}

export enum IntegrationServiceType {
  TELEGRAM = "TELEGRAM",
}

export interface IssueApplicationTokenInputType {
  title: Scalars["String"];
}

export interface PaginationInputType {
  cursor?: InputMaybe<Scalars["String"]>;
  take: Scalars["Float"];
}

export interface PayloadInputType {
  value: Scalars["JSON"];
}

export enum PaymentProcessStatus {
  FAILED = "FAILED",
  NEED_3DS = "NEED_3DS",
  SUCCESS = "SUCCESS",
}

export enum PaymentStatus {
  CANCELED = "CANCELED",
  ERROR = "ERROR",
  INIT = "INIT",
  PAYED = "PAYED",
  PENDING = "PENDING",
}

export enum PlanFeatureType {
  CUSTOM_BUTTONS = "CUSTOM_BUTTONS",
  CUSTOM_CALL_TO_ACTION = "CUSTOM_CALL_TO_ACTION",
  CUSTOM_DESIGN = "CUSTOM_DESIGN",
  CUSTOM_DOMAIN = "CUSTOM_DOMAIN",
  CUSTOM_INTEGRATIONS = "CUSTOM_INTEGRATIONS",
  CUSTOM_THANKS_YOU_PAGE = "CUSTOM_THANKS_YOU_PAGE",
  CUSTOM_WIDGETS = "CUSTOM_WIDGETS",
  DISABLE_BRANDING = "DISABLE_BRANDING",
  FULL_ANALYTICS = "FULL_ANALYTICS",
  FULL_BUTTONS = "FULL_BUTTONS",
  HD_VIDEO = "HD_VIDEO",
  INTEGRATIONS = "INTEGRATIONS",
  VIDEO_DESCRIPTION = "VIDEO_DESCRIPTION",
}

export enum PlanQuotaType {
  VIEWS = "VIEWS",
}

export enum Plans {
  ENTERPRISE = "ENTERPRISE",
  MINI = "MINI",
  PRO = "PRO",
  START = "START",
}

export interface PointInputType {
  x: Scalars["Float"];
  y: Scalars["Float"];
}

export interface PublishFunnelInputType {
  id: Scalars["UUID"];
  snapshotId?: InputMaybe<Scalars["UUID"]>;
}

export interface RefreshTokenInputType {
  token: Scalars["String"];
}

export interface RegisterInputType {
  confirmRequestId: Scalars["UUID"];
  country: Scalars["String"];
  firstname: Scalars["String"];
  lastname: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
  poll?: InputMaybe<Array<RegisterPollInputType>>;
  provider?: InputMaybe<Scalars["String"]>;
  secret?: InputMaybe<Scalars["String"]>;
  source: AuthSource;
}

export interface RegisterPollInputType {
  questionId: Scalars["String"];
  value: Scalars["String"];
}

export interface RequestPlanChangeInputType {
  annual?: InputMaybe<Scalars["Boolean"]>;
  payload?: InputMaybe<Scalars["JSON"]>;
  planId?: InputMaybe<Scalars["UUID"]>;
  prices: Array<CostInputType>;
}

export interface ResultInputType {
  componentId: Scalars["UUID"];
  payload: PayloadInputType;
  stepId?: InputMaybe<Scalars["UUID"]>;
  tenantId: Scalars["UUID"];
  type: VisitorResultType;
}

export interface RevokeApplicationTokenInputType {
  id: Scalars["UUID"];
}

export enum Scope {
  FEEDBACK = "FEEDBACK",
  FUNNEL = "FUNNEL",
}

export interface ScreenResolutionInputType {
  height: Scalars["Float"];
  width: Scalars["Float"];
}

export interface StepDataInputType {
  customData?: InputMaybe<Scalars["JSON"]>;
  final?: InputMaybe<Scalars["Boolean"]>;
  groupId?: InputMaybe<Scalars["UUID"]>;
  nextStep?: InputMaybe<Scalars["UUID"]>;
  point?: InputMaybe<PointInputType>;
  sort?: InputMaybe<Scalars["Float"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export enum StepType {
  BLANK = "BLANK",
  FORM = "FORM",
  START = "START",
  THANKS = "THANKS",
  VIDEO = "VIDEO",
}

export interface StyleDataInputType {
  customData?: InputMaybe<Scalars["JSON"]>;
}

export enum StyleType {
  DEFAULT = "DEFAULT",
  FOCUS = "FOCUS",
  HOVER = "HOVER",
}

export enum TrackerServiceType {
  FACEBOOK_PIXEL = "FACEBOOK_PIXEL",
  GOOGLE_ANALYTICS = "GOOGLE_ANALYTICS",
  VK_PIXEL = "VK_PIXEL",
  YANDEX_METRICA = "YANDEX_METRICA",
}

export enum TwoFactorMethod {
  EMAIL = "EMAIL",
  OTP = "OTP",
  SMS = "SMS",
}

export interface UpdateComponentDataInputType {
  customData?: InputMaybe<Scalars["JSON"]>;
  nextStepId?: InputMaybe<Scalars["UUID"]>;
  sort?: InputMaybe<Scalars["Float"]>;
  stepId?: InputMaybe<Scalars["UUID"]>;
}

export interface UpdateComponentInputType {
  data: UpdateComponentDataInputType;
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
}

export interface UpdateElementDataInputType {
  customData?: InputMaybe<Scalars["JSON"]>;
}

export interface UpdateElementInputType {
  data: UpdateElementDataInputType;
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
}

export interface UpdateFunnelDataInputType {
  title?: InputMaybe<Scalars["String"]>;
}

export interface UpdateFunnelInputType {
  data: UpdateFunnelDataInputType;
  id: Scalars["UUID"];
}

export interface UpdateGroupInputType {
  data: GroupDataInputType;
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
  tenantId: Scalars["UUID"];
}

export interface UpdateIntegrationInputType {
  configuration?: InputMaybe<Scalars["JSON"]>;
  funnelId: Scalars["UUID"];
  isEnabled?: InputMaybe<Scalars["Boolean"]>;
  service: IntegrationServiceType;
  tenantId: Scalars["UUID"];
}

export interface UpdateManyComponentsInputType {
  data: Array<UpdateManyComponentsItemInputType>;
  funnelId: Scalars["UUID"];
}

export interface UpdateManyComponentsItemInputType {
  data: ComponentDataInputType;
  id: Scalars["UUID"];
}

export interface UpdateManyStepsInputType {
  data: Array<UpdateManyStepsItemInputType>;
  funnelId: Scalars["UUID"];
}

export interface UpdateManyStepsItemInputType {
  data: StepDataInputType;
  id: Scalars["UUID"];
}

export interface UpdateStepInputType {
  data: StepDataInputType;
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
}

export interface UpdateStyleDataInputType {
  customData?: InputMaybe<Scalars["JSON"]>;
}

export interface UpdateStyleInputType {
  data: UpdateStyleDataInputType;
  funnelId: Scalars["UUID"];
  id: Scalars["UUID"];
}

export interface UpdateTrackerInputType {
  funnelId: Scalars["UUID"];
  isEnabled?: InputMaybe<Scalars["Boolean"]>;
  service: TrackerServiceType;
  tenantId: Scalars["UUID"];
  trackerId?: InputMaybe<Scalars["String"]>;
}

export interface UpdateUserInputType {
  email?: InputMaybe<Scalars["String"]>;
  firstname?: InputMaybe<Scalars["String"]>;
  id: Scalars["UUID"];
  lastname?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
}

export interface UploadCustomerFileInputType {
  elementId: Scalars["UUID"];
  fileType: FileType;
  funnelId: Scalars["UUID"];
  scope: Scope;
  stepId?: InputMaybe<Scalars["UUID"]>;
  tenantId: Scalars["UUID"];
  visitId?: InputMaybe<Scalars["UUID"]>;
}

export interface UploadFileInputType {
  elementId: Scalars["UUID"];
  fileType: FileType;
  funnelId: Scalars["UUID"];
  scope: Scope;
  stepId?: InputMaybe<Scalars["UUID"]>;
  visitId?: InputMaybe<Scalars["UUID"]>;
}

export interface ValidateTwoFactorInputType {
  code: Scalars["String"];
  login: Scalars["String"];
  method: TwoFactorMethod;
}

export interface ViewFunnelInputType {
  code: Scalars["String"];
  host?: InputMaybe<Scalars["String"]>;
  visitorId?: InputMaybe<Scalars["String"]>;
}

export interface VisitParamsInputType {
  cookiesEnabled?: InputMaybe<Scalars["Boolean"]>;
  deviceMemory?: InputMaybe<Scalars["Float"]>;
  hardwareConcurrency?: InputMaybe<Scalars["Float"]>;
  ip?: InputMaybe<Scalars["String"]>;
  languages?: InputMaybe<Scalars["String"]>;
  platform?: InputMaybe<Scalars["String"]>;
  screenResolution?: InputMaybe<ScreenResolutionInputType>;
  timezone?: InputMaybe<Scalars["String"]>;
  userAgent?: InputMaybe<Scalars["String"]>;
  vendor?: InputMaybe<Scalars["String"]>;
  videoCard?: InputMaybe<Scalars["String"]>;
}

export interface VisitUtmInputType {
  param: Scalars["String"];
  value: Scalars["String"];
}

export enum VisitorEventType {
  BLANK = "BLANK",
  BUTTON_CLICKED = "BUTTON_CLICKED",
  FORM_REACHED = "FORM_REACHED",
  FORM_SENT = "FORM_SENT",
  FUNNEL_OPENED = "FUNNEL_OPENED",
  START_PAGE = "START_PAGE",
  USER_INTERACTED_WITH_COMPONENT = "USER_INTERACTED_WITH_COMPONENT",
  USER_RESUMED_VIDEO = "USER_RESUMED_VIDEO",
  USER_STOPPED_VIDEO = "USER_STOPPED_VIDEO",
  USER_WENT_FROM_STEP = "USER_WENT_FROM_STEP",
  USER_WENT_TO_STEP = "USER_WENT_TO_STEP",
  VIDEO_INTERRUPTED = "VIDEO_INTERRUPTED",
  VIDEO_PLAYED = "VIDEO_PLAYED",
  VIDEO_REACHED = "VIDEO_REACHED",
}

export enum VisitorResultType {
  AUDIO = "AUDIO",
  DOCUMENT = "DOCUMENT",
  TEXT = "TEXT",
  VIDEO = "VIDEO",
}

export interface ZapierTriggerEventFilterInputType {
  funnelIds?: InputMaybe<Array<Scalars["UUID"]>>;
  type: ZapierTriggerEventType;
}

export enum ZapierTriggerEventType {
  FEEDBACK = "FEEDBACK",
  LEAD = "LEAD",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  AuthErrorTypes: true,
  AuthSource: true,
  Boolean: true,
  ComponentType: true,
  ConfirmType: true,
  Date: true,
  ElementType: true,
  FileType: true,
  Float: true,
  IntegrationServiceType: true,
  JSON: true,
  PaymentProcessStatus: true,
  PaymentStatus: true,
  PlanFeatureType: true,
  PlanQuotaType: true,
  Plans: true,
  Scope: true,
  StepType: true,
  String: true,
  StyleType: true,
  TrackerServiceType: true,
  TwoFactorMethod: true,
  UUID: true,
  Upload: true,
  VisitorEventType: true,
  VisitorResultType: true,
  ZapierTriggerEventType: true,
};
export const generatedSchema = {
  AccountPlanCostObjectType: {
    __typename: { __type: "String!" },
    accountPlanId: { __type: "String!" },
    activeFrom: { __type: "Date" },
    activeTo: { __type: "Date" },
    id: { __type: "UUID!" },
    planPriceId: { __type: "UUID!" },
    quantity: { __type: "Float!" },
    tenantId: { __type: "UUID!" },
  },
  AccountPlanWithPlanObjectType: {
    __typename: { __type: "String!" },
    accountId: { __type: "UUID!" },
    accountPlanCosts: { __type: "[AccountPlanCostObjectType!]!" },
    annual: { __type: "Boolean" },
    id: { __type: "UUID!" },
    nextPayment: { __type: "Date" },
    nextPlan: { __type: "NextPlanObjectType" },
    plan: { __type: "PlanObjectType!" },
    priceId: { __type: "UUID" },
    tenantId: { __type: "UUID!" },
  },
  AccountQuotaObjectType: {
    __typename: { __type: "String!" },
    id: { __type: "UUID!" },
    lastRefresh: { __type: "Date" },
    nextRefresh: { __type: "Date" },
    tenantId: { __type: "UUID!" },
    transactions: { __type: "[PlanQuotaTransactionObjectType!]!" },
  },
  ApplicationTokenObjectType: {
    __typename: { __type: "String!" },
    createdAt: { __type: "Date!" },
    id: { __type: "UUID!" },
    title: { __type: "String!" },
  },
  AudioDataObjectType: {
    __typename: { __type: "String!" },
    audioUrl: { __type: "String!" },
    customData: { __type: "JSON" },
    fileId: { __type: "UUID!" },
  },
  AudioObjectType: {
    __typename: { __type: "String!" },
    data: { __type: "AudioDataObjectType!" },
    elementId: { __type: "UUID!" },
  },
  AudioPayloadObjectType: {
    __typename: { __type: "String!" },
    audioUrl: { __type: "String!" },
  },
  AuthResultType: {
    __typename: { __type: "String!" },
    accessToken: { __type: "String!" },
    accessTokenTtl: { __type: "Float!" },
    refreshToken: { __type: "String!" },
    refreshTokenTtl: { __type: "Float!" },
    userId: { __type: "UUID!" },
  },
  CalculateUpgradeInputType: {
    annual: { __type: "Boolean" },
    planId: { __type: "UUID" },
    prices: { __type: "[CostInputType!]!" },
  },
  CalculateUpgradeObjectType: {
    __typename: { __type: "String!" },
    discount: { __type: "Float!" },
    plusDays: { __type: "Float!" },
    price: { __type: "Money" },
  },
  ChangePasswordInputType: {
    newPassword: { __type: "String!" },
    oldPassword: { __type: "String!" },
  },
  CheckConfirmRequestInputType: {
    code: { __type: "String!" },
    id: { __type: "UUID!" },
  },
  CheckConfirmRequestObjectType: {
    __typename: { __type: "String!" },
    authResult: { __type: "AuthResultType" },
    id: { __type: "UUID" },
  },
  ComponentDataInputType: {
    componentId: { __type: "UUID" },
    customData: { __type: "JSON" },
    elementId: { __type: "UUID" },
    mainElementId: { __type: "UUID" },
    nextStepId: { __type: "UUID" },
    sort: { __type: "Float" },
    stepId: { __type: "UUID" },
    title: { __type: "String" },
    type: { __type: "ComponentType!" },
  },
  ComponentDataObjectType: {
    __typename: { __type: "String!" },
    componentId: { __type: "UUID" },
    customData: { __type: "JSON" },
    elementId: { __type: "UUID" },
    mainElementId: { __type: "UUID" },
    nextStepId: { __type: "UUID" },
    sort: { __type: "Float" },
    stepId: { __type: "UUID" },
    title: { __type: "String" },
    type: { __type: "ComponentType!" },
  },
  ComponentObjectType: {
    __typename: { __type: "String!" },
    data: { __type: "ComponentDataObjectType!" },
    id: { __type: "UUID!" },
  },
  CostInputType: {
    priceId: { __type: "UUID!" },
    quantity: { __type: "Float!" },
  },
  CreateComponentInputType: {
    data: { __type: "CreateComponentPayload!" },
    funnelId: { __type: "UUID!" },
  },
  CreateComponentPayload: { data: { __type: "ComponentDataInputType!" } },
  CreateConfirmRequestInputType: {
    type: { __type: "ConfirmType!" },
    value: { __type: "String!" },
  },
  CreateConfirmRequestObjectType: {
    __typename: { __type: "String!" },
    id: { __type: "UUID!" },
  },
  CreateElementInputType: {
    data: { __type: "CreateElementPayload!" },
    funnelId: { __type: "UUID!" },
  },
  CreateElementPayload: { data: { __type: "ElementDataInputType!" } },
  CreateEventMessageInputType: {
    componentId: { __type: "UUID" },
    eventType: { __type: "VisitorEventType!" },
    payload: { __type: "PayloadInputType" },
    stepId: { __type: "UUID" },
    tenantId: { __type: "UUID!" },
    visitId: { __type: "UUID!" },
  },
  CreateFunnelDataInputType: { title: { __type: "String!" } },
  CreateFunnelInputType: { data: { __type: "CreateFunnelDataInputType!" } },
  CreateGroupInputType: {
    funnelId: { __type: "UUID!" },
    sort: { __type: "Float!" },
    title: { __type: "String!" },
  },
  CreateManyComponentsInputType: {
    data: { __type: "[CreateComponentPayload!]!" },
    funnelId: { __type: "UUID!" },
  },
  CreateManyResultsMessageInputType: {
    items: { __type: "[ResultInputType!]!" },
    tenantId: { __type: "UUID!" },
    visitId: { __type: "UUID!" },
  },
  CreateResultMessageInputType: {
    componentId: { __type: "UUID!" },
    payload: { __type: "PayloadInputType!" },
    stepId: { __type: "UUID" },
    tenantId: { __type: "UUID!" },
    type: { __type: "VisitorResultType!" },
    visitId: { __type: "UUID!" },
  },
  CreateStepInputType: {
    data: { __type: "CreateStepPayloadInputType!" },
    funnelId: { __type: "UUID!" },
  },
  CreateStepPayloadInputType: {
    data: { __type: "StepDataInputType!" },
    type: { __type: "StepType!" },
  },
  CreateStyleInputPayload: {
    componentId: { __type: "UUID" },
    data: { __type: "StyleDataInputType!" },
    elementId: { __type: "UUID" },
    type: { __type: "StyleType!" },
  },
  CreateStyleInputType: {
    data: { __type: "CreateStyleInputPayload!" },
    funnelId: { __type: "UUID!" },
    tenantId: { __type: "UUID!" },
  },
  CreateVisitInputType: {
    fingerprint: { __type: "String!" },
    funnelId: { __type: "UUID!" },
    funnelSnapshotId: { __type: "UUID!" },
    params: { __type: "VisitParamsInputType" },
    referer: { __type: "String!" },
    tenantId: { __type: "UUID!" },
    utm: { __type: "[VisitUtmInputType!]" },
  },
  DeleteComponentInputType: {
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
  },
  DeleteElementInputType: {
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
  },
  DeleteFunnelInputType: {
    force: { __type: "Boolean" },
    id: { __type: "UUID!" },
  },
  DeleteGroupInputType: {
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
    tenantId: { __type: "UUID!" },
  },
  DeleteManyStepsInputType: {
    funnelId: { __type: "UUID!" },
    ids: { __type: "[UUID!]!" },
  },
  DeleteStepInputType: {
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
  },
  DeleteStyleInputType: {
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
  },
  ElementDataInputType: {
    componentId: { __type: "UUID" },
    customData: { __type: "JSON" },
    elementId: { __type: "UUID" },
    sort: { __type: "Float" },
    type: { __type: "ElementType" },
  },
  ElementDataObjectType: {
    __typename: { __type: "String!" },
    componentId: { __type: "UUID" },
    customData: { __type: "JSON" },
    elementId: { __type: "UUID" },
    sort: { __type: "Float" },
    type: { __type: "ElementType" },
  },
  ElementObjectType: {
    __typename: { __type: "String!" },
    data: { __type: "ElementDataObjectType!" },
    id: { __type: "UUID!" },
    styles: { __type: "[StyleObjectType!]" },
  },
  ErrorObjectType: {
    __typename: { __type: "String!" },
    auth: { __type: "AuthErrorTypes!" },
  },
  FilePayloadUnion: {
    __typename: { __type: "String!" },
    $on: { __type: "$FilePayloadUnion!" },
  },
  FileProcessedObjectType: {
    __typename: { __type: "String!" },
    elementId: { __type: "UUID!" },
    error: { __type: "String" },
    fileId: { __type: "UUID!" },
    fileType: { __type: "FileType!" },
    funnelId: { __type: "UUID!" },
    payload: { __type: "FileProcessedResultUnion!" },
    scope: { __type: "Scope!" },
    tenantId: { __type: "UUID!" },
    visitId: { __type: "UUID" },
  },
  FileProcessedResultUnion: {
    __typename: { __type: "String!" },
    $on: { __type: "$FileProcessedResultUnion!" },
  },
  FunnelAggregateObjectType: {
    __typename: { __type: "String!" },
    code: { __type: "String!" },
    id: { __type: "UUID!" },
    image: { __type: "String" },
    published: { __type: "Boolean!" },
    title: { __type: "String!" },
  },
  FunnelObjectType: {
    __typename: { __type: "String!" },
    code: { __type: "String!" },
    components: { __type: "[ComponentObjectType!]!" },
    deletedAt: { __type: "Date" },
    elements: { __type: "[ElementObjectType!]!" },
    files: { __type: "[FilePayloadUnion!]!" },
    groups: { __type: "[GroupObjectType!]!" },
    id: { __type: "UUID!" },
    isPublished: { __type: "Boolean!" },
    lastEdit: { __type: "Date" },
    steps: { __type: "[StepObjectType!]!" },
    styles: { __type: "[StyleObjectType!]!" },
    tenantId: { __type: "UUID!" },
    title: { __type: "String!" },
  },
  GetAccountObjectType: {
    __typename: { __type: "String!" },
    accountPlan: { __type: "AccountPlanWithPlanObjectType!" },
    dateCreate: { __type: "Date!" },
    payments: { __type: "[PaymentObjectType!]!" },
    quota: { __type: "AccountQuotaObjectType!" },
    quotas: { __type: "[QuotaBalanceObjectType!]!" },
    tenantId: { __type: "UUID!" },
  },
  GetAllFunnelsInputType: { deleted: { __type: "Boolean" } },
  GetFileInputType: { id: { __type: "UUID!" }, tenantId: { __type: "UUID!" } },
  GetFileObjectType: {
    __typename: { __type: "String!" },
    previewFileUrl: { __type: "String" },
    processedFileUrl: { __type: "String" },
    rawFileUrl: { __type: "String" },
    type: { __type: "FileType!" },
  },
  GetFunnelInputType: {
    id: { __type: "UUID!" },
    snapshotId: { __type: "UUID" },
  },
  GetFunnelsObjectType: {
    __typename: { __type: "String!" },
    items: { __type: "[FunnelAggregateObjectType!]!" },
  },
  GetIntegrationsInputType: {
    funnelId: { __type: "UUID!" },
    tenantId: { __type: "UUID!" },
  },
  GetOgData: { url: { __type: "String!" } },
  GetPlansInputType: {
    country: { __type: "String" },
    currency: { __type: "String!" },
  },
  GetPlansObjectType: {
    __typename: { __type: "String!" },
    items: { __type: "[PlanResponseObjectType!]!" },
  },
  GetTrackersInputType: {
    funnelId: { __type: "UUID!" },
    tenantId: { __type: "UUID!" },
  },
  GetVisitInputType: { id: { __type: "UUID!" } },
  GetVisitObjectType: {
    __typename: { __type: "String!" },
    dateCreate: { __type: "Date!" },
    events: { __type: "[VisitEventObjectType!]!" },
    funnelSnapshotId: { __type: "UUID!" },
    id: { __type: "UUID!" },
    params: { __type: "VisitParamsObjectType" },
    results: { __type: "[VisitResultObjectType!]!" },
    visitorId: { __type: "UUID!" },
  },
  GetVisitsInputType: {
    funnelId: { __type: "UUID!" },
    pagination: { __type: "PaginationInputType!" },
  },
  GetVisitsObjectType: {
    __typename: { __type: "String!" },
    items: { __type: "[VisitItemObjectType!]!" },
    pagination: { __type: "PaginationResultObjectType!" },
  },
  GroupDataInputType: {
    customData: { __type: "JSON" },
    parentId: { __type: "String" },
    sort: { __type: "Float!" },
    title: { __type: "String!" },
  },
  GroupDataObjectType: {
    __typename: { __type: "String!" },
    parentId: { __type: "String" },
    sort: { __type: "Float!" },
    title: { __type: "String!" },
  },
  GroupObjectType: {
    __typename: { __type: "String!" },
    data: { __type: "GroupDataObjectType!" },
    id: { __type: "UUID!" },
  },
  Handle3dsInputType: { payload: { __type: "JSON!" } },
  Handle3dsPaymentObjectType: {
    __typename: { __type: "String!" },
    paymentId: { __type: "UUID!" },
    status: { __type: "PaymentProcessStatus!" },
  },
  IdResultObjectType: {
    __typename: { __type: "String!" },
    id: { __type: "UUID!" },
  },
  ImageDataObjectType: {
    __typename: { __type: "String!" },
    customData: { __type: "JSON" },
    fileId: { __type: "UUID!" },
    imageUrl: { __type: "String!" },
  },
  ImageObjectType: {
    __typename: { __type: "String!" },
    data: { __type: "ImageDataObjectType!" },
    elementId: { __type: "UUID!" },
  },
  ImagePayloadObjectType: {
    __typename: { __type: "String!" },
    imageUrl: { __type: "String!" },
  },
  IntegrationObjectType: {
    __typename: { __type: "String!" },
    configuration: { __type: "JSON" },
    isEnabled: { __type: "Boolean!" },
    service: { __type: "IntegrationServiceType!" },
    updatedAt: { __type: "Date" },
  },
  IssueApplicationTokenInputType: { title: { __type: "String!" } },
  IssueApplicationTokenResultType: {
    __typename: { __type: "String!" },
    token: { __type: "String!" },
  },
  LoginResultType: {
    __typename: { __type: "String!" },
    authResult: { __type: "AuthResultType" },
    id: { __type: "UUID!" },
    twoFactorMethod: { __type: "String" },
  },
  ManyIdsResultObjectType: {
    __typename: { __type: "String!" },
    ids: { __type: "[UUID!]!" },
  },
  Money: {
    __typename: { __type: "String!" },
    currency: { __type: "String!" },
    value: { __type: "Float!" },
  },
  NextPlanObjectType: {
    __typename: { __type: "String!" },
    dateApply: { __type: "Date!" },
    id: { __type: "UUID!" },
    planId: { __type: "UUID!" },
    tenantId: { __type: "UUID!" },
  },
  OgDataObjectType: {
    __typename: { __type: "String!" },
    fields: { __type: "JSON!" },
  },
  PaginationInputType: {
    cursor: { __type: "String" },
    take: { __type: "Float!" },
  },
  PaginationResultObjectType: {
    __typename: { __type: "String!" },
    total: { __type: "Float!" },
  },
  PayloadInputType: { value: { __type: "JSON!" } },
  PaymentObjectType: {
    __typename: { __type: "String!" },
    accountId: { __type: "UUID!" },
    dateCreate: { __type: "Date!" },
    dateUpdate: { __type: "Date" },
    id: { __type: "UUID!" },
    payload: { __type: "JSON!" },
    paymentSystemId: { __type: "UUID!" },
    status: { __type: "PaymentStatus!" },
    tenantId: { __type: "UUID!" },
  },
  PlanFeatureObjectType: {
    __typename: { __type: "String!" },
    id: { __type: "UUID!" },
    planId: { __type: "UUID!" },
    tenantId: { __type: "UUID!" },
    type: { __type: "PlanFeatureType!" },
  },
  PlanFeatureResponseObjectType: {
    __typename: { __type: "String!" },
    type: { __type: "String!" },
  },
  PlanLimitObjectType: {
    __typename: { __type: "String!" },
    id: { __type: "UUID!" },
    planId: { __type: "UUID!" },
    tenantId: { __type: "UUID!" },
    type: { __type: "String!" },
    value: { __type: "Float" },
  },
  PlanLimitResponseObjectType: {
    __typename: { __type: "String!" },
    type: { __type: "String!" },
    value: { __type: "Float" },
  },
  PlanObjectType: {
    __typename: { __type: "String!" },
    code: { __type: "Plans!" },
    features: { __type: "[PlanFeatureObjectType!]!" },
    id: { __type: "UUID!" },
    limits: { __type: "[PlanLimitObjectType!]!" },
    quotas: { __type: "[PlanQuotaObjectType!]!" },
    tenantId: { __type: "UUID!" },
  },
  PlanPriceDiscountObjectType: {
    __typename: { __type: "String!" },
    fromQuantity: { __type: "Float!" },
    value: { __type: "Float!" },
  },
  PlanPriceObjectType: {
    __typename: { __type: "String!" },
    country: { __type: "String" },
    currency: { __type: "String!" },
    default: { __type: "Boolean" },
    discounts: { __type: "[PlanPriceDiscountObjectType!]!" },
    id: { __type: "UUID!" },
    planId: { __type: "String!" },
    tenantId: { __type: "UUID!" },
    type: { __type: "String!" },
    value: { __type: "Float!" },
  },
  PlanQuotaObjectType: {
    __typename: { __type: "String!" },
    id: { __type: "UUID!" },
    planId: { __type: "UUID!" },
    refreshable: { __type: "Boolean" },
    tenantId: { __type: "UUID!" },
    type: { __type: "String!" },
    value: { __type: "Float!" },
  },
  PlanQuotaResponseObjectType: {
    __typename: { __type: "String!" },
    refreshable: { __type: "Boolean" },
    type: { __type: "String!" },
    value: { __type: "Float!" },
  },
  PlanQuotaTransactionObjectType: {
    __typename: { __type: "String!" },
    accountPlanId: { __type: "UUID!" },
    accountQuotaId: { __type: "String!" },
    balance: { __type: "Float!" },
    credit: { __type: "Float!" },
    debit: { __type: "Float!" },
    id: { __type: "UUID!" },
    quotaType: { __type: "PlanQuotaType!" },
    tenantId: { __type: "UUID!" },
  },
  PlanResponseObjectType: {
    __typename: { __type: "String!" },
    annualDiscount: { __type: "Float" },
    code: { __type: "String!" },
    custom: { __type: "Boolean" },
    customPrice: { __type: "Boolean" },
    features: { __type: "[PlanFeatureResponseObjectType!]!" },
    free: { __type: "Boolean" },
    id: { __type: "UUID!" },
    limits: { __type: "[PlanLimitResponseObjectType!]!" },
    prices: { __type: "[PlanPriceObjectType!]!" },
    quotas: { __type: "[PlanQuotaResponseObjectType!]!" },
    trialDays: { __type: "Float" },
  },
  PointInputType: { x: { __type: "Float!" }, y: { __type: "Float!" } },
  PointObjectType: {
    __typename: { __type: "String!" },
    x: { __type: "Float!" },
    y: { __type: "Float!" },
  },
  PublishFunnelInputType: {
    id: { __type: "UUID!" },
    snapshotId: { __type: "UUID" },
  },
  QuotaBalanceObjectType: {
    __typename: { __type: "String!" },
    balance: { __type: "Float!" },
    type: { __type: "PlanQuotaType!" },
  },
  RefreshTokenInputType: { token: { __type: "String!" } },
  RefreshTokenObjectType: {
    __typename: { __type: "String!" },
    accessToken: { __type: "String!" },
  },
  RegisterInputType: {
    confirmRequestId: { __type: "UUID!" },
    country: { __type: "String!" },
    firstname: { __type: "String!" },
    lastname: { __type: "String!" },
    phone: { __type: "String" },
    poll: { __type: "[RegisterPollInputType!]" },
    provider: { __type: "String" },
    secret: { __type: "String" },
    source: { __type: "AuthSource!" },
  },
  RegisterPollInputType: {
    questionId: { __type: "String!" },
    value: { __type: "String!" },
  },
  RequestAccountPlanChangeDowngradeObjectType: {
    __typename: { __type: "String!" },
    dateApply: { __type: "Date!" },
  },
  RequestAccountPlanChangeUpgradeObjectType: {
    __typename: { __type: "String!" },
    paymentId: { __type: "UUID" },
    price: { __type: "Money" },
    redirect: { __type: "String" },
    status: { __type: "PaymentProcessStatus!" },
  },
  RequestPlanChangeInputType: {
    annual: { __type: "Boolean" },
    payload: { __type: "JSON" },
    planId: { __type: "UUID" },
    prices: { __type: "[CostInputType!]!" },
  },
  RequestPlanChangeObjectType: {
    __typename: { __type: "String!" },
    downgrade: { __type: "RequestAccountPlanChangeDowngradeObjectType" },
    upgrade: { __type: "RequestAccountPlanChangeUpgradeObjectType" },
  },
  ResultInputType: {
    componentId: { __type: "UUID!" },
    payload: { __type: "PayloadInputType!" },
    stepId: { __type: "UUID" },
    tenantId: { __type: "UUID!" },
    type: { __type: "VisitorResultType!" },
  },
  RevokeApplicationTokenInputType: { id: { __type: "UUID!" } },
  ScreenResolutionInputType: {
    height: { __type: "Float!" },
    width: { __type: "Float!" },
  },
  ScreenResolutionObjectType: {
    __typename: { __type: "String!" },
    height: { __type: "Float!" },
    width: { __type: "Float!" },
  },
  StepDataInputType: {
    customData: { __type: "JSON" },
    final: { __type: "Boolean" },
    groupId: { __type: "UUID" },
    nextStep: { __type: "UUID" },
    point: { __type: "PointInputType" },
    sort: { __type: "Float" },
    title: { __type: "String" },
  },
  StepDataObjectType: {
    __typename: { __type: "String!" },
    customData: { __type: "JSON" },
    final: { __type: "Boolean" },
    groupId: { __type: "UUID" },
    nextStep: { __type: "UUID" },
    point: { __type: "PointObjectType!" },
    sort: { __type: "Float" },
    title: { __type: "String" },
  },
  StepObjectType: {
    __typename: { __type: "String!" },
    components: { __type: "[ComponentObjectType!]!" },
    data: { __type: "StepDataObjectType!" },
    first: { __type: "Boolean" },
    id: { __type: "UUID!" },
    type: { __type: "StepType!" },
  },
  StyleDataInputType: { customData: { __type: "JSON" } },
  StyleDataObjectType: {
    __typename: { __type: "String!" },
    customData: { __type: "JSON" },
  },
  StyleObjectType: {
    __typename: { __type: "String!" },
    componentId: { __type: "UUID" },
    data: { __type: "StyleDataObjectType!" },
    elementId: { __type: "UUID" },
    id: { __type: "UUID!" },
    type: { __type: "StyleType!" },
  },
  TrackerObjectType: {
    __typename: { __type: "String!" },
    isEnabled: { __type: "Boolean!" },
    service: { __type: "TrackerServiceType!" },
    trackerId: { __type: "String" },
    updatedAt: { __type: "Date" },
  },
  TrackerShortObjectType: {
    __typename: { __type: "String!" },
    isEnabled: { __type: "Boolean!" },
    service: { __type: "TrackerServiceType!" },
    trackerId: { __type: "String" },
  },
  UpdateComponentDataInputType: {
    customData: { __type: "JSON" },
    nextStepId: { __type: "UUID" },
    sort: { __type: "Float" },
    stepId: { __type: "UUID" },
  },
  UpdateComponentInputType: {
    data: { __type: "UpdateComponentDataInputType!" },
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
  },
  UpdateElementDataInputType: { customData: { __type: "JSON" } },
  UpdateElementInputType: {
    data: { __type: "UpdateElementDataInputType!" },
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
  },
  UpdateFunnelDataInputType: { title: { __type: "String" } },
  UpdateFunnelInputType: {
    data: { __type: "UpdateFunnelDataInputType!" },
    id: { __type: "UUID!" },
  },
  UpdateGroupInputType: {
    data: { __type: "GroupDataInputType!" },
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
    tenantId: { __type: "UUID!" },
  },
  UpdateIntegrationInputType: {
    configuration: { __type: "JSON" },
    funnelId: { __type: "UUID!" },
    isEnabled: { __type: "Boolean" },
    service: { __type: "IntegrationServiceType!" },
    tenantId: { __type: "UUID!" },
  },
  UpdateManyComponentsInputType: {
    data: { __type: "[UpdateManyComponentsItemInputType!]!" },
    funnelId: { __type: "UUID!" },
  },
  UpdateManyComponentsItemInputType: {
    data: { __type: "ComponentDataInputType!" },
    id: { __type: "UUID!" },
  },
  UpdateManyStepsInputType: {
    data: { __type: "[UpdateManyStepsItemInputType!]!" },
    funnelId: { __type: "UUID!" },
  },
  UpdateManyStepsItemInputType: {
    data: { __type: "StepDataInputType!" },
    id: { __type: "UUID!" },
  },
  UpdateStepInputType: {
    data: { __type: "StepDataInputType!" },
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
  },
  UpdateStyleDataInputType: { customData: { __type: "JSON" } },
  UpdateStyleInputType: {
    data: { __type: "UpdateStyleDataInputType!" },
    funnelId: { __type: "UUID!" },
    id: { __type: "UUID!" },
  },
  UpdateTrackerInputType: {
    funnelId: { __type: "UUID!" },
    isEnabled: { __type: "Boolean" },
    service: { __type: "TrackerServiceType!" },
    tenantId: { __type: "UUID!" },
    trackerId: { __type: "String" },
  },
  UpdateUserInputType: {
    email: { __type: "String" },
    firstname: { __type: "String" },
    id: { __type: "UUID!" },
    lastname: { __type: "String" },
    phone: { __type: "String" },
  },
  UploadCustomerFileInputType: {
    elementId: { __type: "UUID!" },
    fileType: { __type: "FileType!" },
    funnelId: { __type: "UUID!" },
    scope: { __type: "Scope!" },
    stepId: { __type: "UUID" },
    tenantId: { __type: "UUID!" },
    visitId: { __type: "UUID" },
  },
  UploadFileInputType: {
    elementId: { __type: "UUID!" },
    fileType: { __type: "FileType!" },
    funnelId: { __type: "UUID!" },
    scope: { __type: "Scope!" },
    stepId: { __type: "UUID" },
    visitId: { __type: "UUID" },
  },
  UserObjectType: {
    __typename: { __type: "String!" },
    email: { __type: "String!" },
    firstname: { __type: "String!" },
    id: { __type: "UUID!" },
    lastname: { __type: "String!" },
    phone: { __type: "String" },
    tenantId: { __type: "String!" },
  },
  ValidateTwoFactorInputType: {
    code: { __type: "String!" },
    login: { __type: "String!" },
    method: { __type: "TwoFactorMethod!" },
  },
  VideoDataObjectType: {
    __typename: { __type: "String!" },
    customData: { __type: "JSON" },
    fileId: { __type: "UUID!" },
    previewUrl: { __type: "String" },
    videoUrl: { __type: "String!" },
  },
  VideoObjectType: {
    __typename: { __type: "String!" },
    data: { __type: "VideoDataObjectType!" },
    elementId: { __type: "UUID!" },
  },
  VideoPayloadObjectType: {
    __typename: { __type: "String!" },
    previewUrl: { __type: "String!" },
    videoUrl: { __type: "String!" },
  },
  ViewFunnelInputType: {
    code: { __type: "String!" },
    host: { __type: "String" },
    visitorId: { __type: "String" },
  },
  ViewFunnelObjectType: {
    __typename: { __type: "String!" },
    code: { __type: "String!" },
    components: { __type: "[ComponentObjectType!]!" },
    deletedAt: { __type: "Date" },
    elements: { __type: "[ElementObjectType!]!" },
    files: { __type: "[FilePayloadUnion!]!" },
    groups: { __type: "[GroupObjectType!]!" },
    id: { __type: "UUID!" },
    isPublished: { __type: "Boolean!" },
    lastEdit: { __type: "Date" },
    snapshotId: { __type: "UUID!" },
    steps: { __type: "[StepObjectType!]!" },
    styles: { __type: "[StyleObjectType!]!" },
    tenantId: { __type: "UUID!" },
    title: { __type: "String!" },
    trackers: { __type: "[TrackerShortObjectType!]!" },
  },
  VisitEventObjectType: {
    __typename: { __type: "String!" },
    componentId: { __type: "UUID" },
    id: { __type: "UUID!" },
    payload: { __type: "JSON" },
    stepId: { __type: "UUID" },
    tenantId: { __type: "UUID!" },
    type: { __type: "VisitorEventType!" },
    visitId: { __type: "UUID!" },
  },
  VisitItemObjectType: {
    __typename: { __type: "String!" },
    dateCreate: { __type: "Date!" },
    id: { __type: "UUID!" },
    params: { __type: "VisitParamsObjectType" },
    visitorId: { __type: "UUID!" },
  },
  VisitParamsInputType: {
    cookiesEnabled: { __type: "Boolean" },
    deviceMemory: { __type: "Float" },
    hardwareConcurrency: { __type: "Float" },
    ip: { __type: "String" },
    languages: { __type: "String" },
    platform: { __type: "String" },
    screenResolution: { __type: "ScreenResolutionInputType" },
    timezone: { __type: "String" },
    userAgent: { __type: "String" },
    vendor: { __type: "String" },
    videoCard: { __type: "String" },
  },
  VisitParamsObjectType: {
    __typename: { __type: "String!" },
    cookiesEnabled: { __type: "Boolean" },
    deviceMemory: { __type: "Float" },
    hardwareConcurrency: { __type: "Float" },
    ip: { __type: "String" },
    languages: { __type: "String" },
    platform: { __type: "String" },
    screenResolution: { __type: "ScreenResolutionObjectType" },
    timezone: { __type: "String" },
    userAgent: { __type: "String" },
    vendor: { __type: "String" },
    videoCard: { __type: "String" },
  },
  VisitResultObjectType: {
    __typename: { __type: "String!" },
    componentId: { __type: "UUID!" },
    id: { __type: "UUID!" },
    payload: { __type: "VisitResultPayloadUnion!" },
    stepId: { __type: "UUID" },
    tenantId: { __type: "UUID!" },
    type: { __type: "VisitorResultType!" },
    visitId: { __type: "UUID!" },
  },
  VisitResultPayloadAudioObjectType: {
    __typename: { __type: "String!" },
    audioUrl: { __type: "String!" },
    fileId: { __type: "UUID!" },
    fileType: { __type: "FileType!" },
  },
  VisitResultPayloadImageObjectType: {
    __typename: { __type: "String!" },
    fileId: { __type: "UUID!" },
    fileType: { __type: "FileType!" },
    imageUrl: { __type: "String!" },
  },
  VisitResultPayloadTextObjectType: {
    __typename: { __type: "String!" },
    text: { __type: "String!" },
  },
  VisitResultPayloadUnion: {
    __typename: { __type: "String!" },
    $on: { __type: "$VisitResultPayloadUnion!" },
  },
  VisitResultPayloadVideoObjectType: {
    __typename: { __type: "String!" },
    fileId: { __type: "UUID!" },
    fileType: { __type: "FileType!" },
    previewUrl: { __type: "String!" },
    videoUrl: { __type: "String!" },
  },
  VisitUtmInputType: {
    param: { __type: "String!" },
    value: { __type: "String!" },
  },
  ZapierTriggerEventFilterInputType: {
    funnelIds: { __type: "[UUID!]" },
    type: { __type: "ZapierTriggerEventType!" },
  },
  ZapierTriggerEventObjectType: {
    __typename: { __type: "String!" },
    dateCreate: { __type: "Date!" },
    funnel: { __type: "FunnelAggregateObjectType!" },
    id: { __type: "UUID!" },
    payload: { __type: "JSON!" },
    type: { __type: "ZapierTriggerEventType!" },
  },
  ZapierTriggerEventsObjectType: {
    __typename: { __type: "String!" },
    items: { __type: "[ZapierTriggerEventObjectType!]!" },
    pagination: { __type: "PaginationResultObjectType!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    calculatePlanChange: {
      __type: "CalculateUpgradeObjectType!",
      __args: { data: "CalculateUpgradeInputType!" },
    },
    cancelNextPlan: { __type: "IdResultObjectType!" },
    changePassword: {
      __type: "UserObjectType!",
      __args: { data: "ChangePasswordInputType!" },
    },
    checkConfirmRequest: {
      __type: "CheckConfirmRequestObjectType!",
      __args: { data: "CheckConfirmRequestInputType!" },
    },
    createComponent: {
      __type: "ComponentObjectType!",
      __args: { data: "CreateComponentInputType!" },
    },
    createConfirmRequest: {
      __type: "CreateConfirmRequestObjectType!",
      __args: { data: "CreateConfirmRequestInputType!" },
    },
    createElement: {
      __type: "ElementObjectType!",
      __args: { data: "CreateElementInputType!" },
    },
    createFunnel: {
      __type: "IdResultObjectType!",
      __args: { data: "CreateFunnelInputType!" },
    },
    createGroup: {
      __type: "GroupObjectType!",
      __args: { data: "CreateGroupInputType!" },
    },
    createManyComponents: {
      __type: "[ComponentObjectType!]!",
      __args: { data: "CreateManyComponentsInputType!" },
    },
    createManyVisitResults: {
      __type: "ManyIdsResultObjectType!",
      __args: { data: "CreateManyResultsMessageInputType!" },
    },
    createStep: {
      __type: "StepObjectType!",
      __args: { data: "CreateStepInputType!" },
    },
    createStyle: {
      __type: "StyleObjectType!",
      __args: { data: "CreateStyleInputType!" },
    },
    createVisit: {
      __type: "IdResultObjectType!",
      __args: { data: "CreateVisitInputType!" },
    },
    createVisitEvent: {
      __type: "IdResultObjectType!",
      __args: { data: "CreateEventMessageInputType!" },
    },
    createVisitResult: {
      __type: "IdResultObjectType!",
      __args: { data: "CreateResultMessageInputType!" },
    },
    deleteComponent: {
      __type: "IdResultObjectType!",
      __args: { data: "DeleteComponentInputType!" },
    },
    deleteElement: {
      __type: "IdResultObjectType!",
      __args: { data: "DeleteElementInputType!" },
    },
    deleteFunnel: {
      __type: "IdResultObjectType!",
      __args: { data: "DeleteFunnelInputType!" },
    },
    deleteGroup: {
      __type: "IdResultObjectType!",
      __args: { data: "DeleteGroupInputType!" },
    },
    deleteManySteps: {
      __type: "ManyIdsResultObjectType!",
      __args: { data: "DeleteManyStepsInputType!" },
    },
    deleteStep: {
      __type: "IdResultObjectType!",
      __args: { data: "DeleteStepInputType!" },
    },
    deleteStyle: {
      __type: "IdResultObjectType!",
      __args: { data: "DeleteStyleInputType!" },
    },
    errors: { __type: "ErrorObjectType!" },
    handle3ds: {
      __type: "Handle3dsPaymentObjectType!",
      __args: { data: "Handle3dsInputType!" },
    },
    issueApplicationToken: {
      __type: "IssueApplicationTokenResultType!",
      __args: { data: "IssueApplicationTokenInputType!" },
    },
    logout: { __type: "IdResultObjectType!" },
    publishFunnel: {
      __type: "IdResultObjectType!",
      __args: { data: "PublishFunnelInputType!" },
    },
    refresh: {
      __type: "RefreshTokenObjectType!",
      __args: { data: "RefreshTokenInputType!" },
    },
    register: {
      __type: "LoginResultType!",
      __args: { data: "RegisterInputType!" },
    },
    requestPlanChange: {
      __type: "RequestPlanChangeObjectType!",
      __args: { data: "RequestPlanChangeInputType!" },
    },
    revokeApplicationToken: {
      __type: "IdResultObjectType!",
      __args: { data: "RevokeApplicationTokenInputType!" },
    },
    twoFactorValidate: {
      __type: "AuthResultType!",
      __args: { data: "ValidateTwoFactorInputType!" },
    },
    updateComponent: {
      __type: "IdResultObjectType!",
      __args: { data: "UpdateComponentInputType!" },
    },
    updateElement: {
      __type: "IdResultObjectType!",
      __args: { data: "UpdateElementInputType!" },
    },
    updateFunnel: {
      __type: "IdResultObjectType!",
      __args: { data: "UpdateFunnelInputType!" },
    },
    updateGroup: {
      __type: "IdResultObjectType!",
      __args: { data: "UpdateGroupInputType!" },
    },
    updateIntegration: {
      __type: "IdResultObjectType!",
      __args: { data: "UpdateIntegrationInputType!" },
    },
    updateManyComponents: {
      __type: "ManyIdsResultObjectType!",
      __args: { data: "UpdateManyComponentsInputType!" },
    },
    updateManySteps: {
      __type: "ManyIdsResultObjectType!",
      __args: { data: "UpdateManyStepsInputType!" },
    },
    updateStep: {
      __type: "IdResultObjectType!",
      __args: { data: "UpdateStepInputType!" },
    },
    updateStyle: {
      __type: "IdResultObjectType!",
      __args: { data: "UpdateStyleInputType!" },
    },
    updateTracker: {
      __type: "IdResultObjectType!",
      __args: { data: "UpdateTrackerInputType!" },
    },
    updateUser: {
      __type: "UserObjectType!",
      __args: { data: "UpdateUserInputType!" },
    },
    uploadCustomerFile: {
      __type: "IdResultObjectType!",
      __args: { data: "UploadCustomerFileInputType!", file: "Upload!" },
    },
    uploadFile: {
      __type: "IdResultObjectType!",
      __args: { data: "UploadFileInputType!", file: "Upload!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    getAccount: { __type: "GetAccountObjectType!" },
    getAllFunnels: {
      __type: "GetFunnelsObjectType!",
      __args: { data: "GetAllFunnelsInputType" },
    },
    getApplicationTokens: { __type: "[ApplicationTokenObjectType!]!" },
    getFile: {
      __type: "GetFileObjectType!",
      __args: { data: "GetFileInputType!" },
    },
    getFunnel: {
      __type: "FunnelObjectType!",
      __args: { data: "GetFunnelInputType!" },
    },
    getIntegrations: {
      __type: "[IntegrationObjectType!]!",
      __args: { data: "GetIntegrationsInputType!" },
    },
    getOgData: { __type: "OgDataObjectType!", __args: { data: "GetOgData!" } },
    getPlans: {
      __type: "GetPlansObjectType!",
      __args: { data: "GetPlansInputType!" },
    },
    getTrackers: {
      __type: "[TrackerObjectType!]!",
      __args: { data: "GetTrackersInputType!" },
    },
    getVisit: {
      __type: "GetVisitObjectType!",
      __args: { data: "GetVisitInputType!" },
    },
    getVisits: {
      __type: "GetVisitsObjectType!",
      __args: { data: "GetVisitsInputType!" },
    },
    getZapierTriggerEvents: {
      __type: "ZapierTriggerEventsObjectType!",
      __args: {
        filter: "ZapierTriggerEventFilterInputType!",
        pagination: "PaginationInputType",
      },
    },
    me: { __type: "UserObjectType!" },
    viewFunnel: {
      __type: "ViewFunnelObjectType!",
      __args: { data: "ViewFunnelInputType!" },
    },
  },
  subscription: {
    __typename: { __type: "String!" },
    onFileProcessed: { __type: "FileProcessedObjectType!" },
  },
  [SchemaUnionsKey]: {
    FilePayloadUnion: ["AudioObjectType", "ImageObjectType", "VideoObjectType"],
    FileProcessedResultUnion: [
      "AudioPayloadObjectType",
      "ImagePayloadObjectType",
      "VideoPayloadObjectType",
    ],
    VisitResultPayloadUnion: [
      "VisitResultPayloadAudioObjectType",
      "VisitResultPayloadImageObjectType",
      "VisitResultPayloadTextObjectType",
      "VisitResultPayloadVideoObjectType",
    ],
  },
} as const;

export interface AccountPlanCostObjectType {
  __typename?: "AccountPlanCostObjectType";
  accountPlanId: ScalarsEnums["String"];
  activeFrom?: Maybe<ScalarsEnums["Date"]>;
  activeTo?: Maybe<ScalarsEnums["Date"]>;
  id: ScalarsEnums["UUID"];
  planPriceId: ScalarsEnums["UUID"];
  quantity: ScalarsEnums["Float"];
  tenantId: ScalarsEnums["UUID"];
}

export interface AccountPlanWithPlanObjectType {
  __typename?: "AccountPlanWithPlanObjectType";
  accountId: ScalarsEnums["UUID"];
  accountPlanCosts: Array<AccountPlanCostObjectType>;
  annual?: Maybe<ScalarsEnums["Boolean"]>;
  id: ScalarsEnums["UUID"];
  nextPayment?: Maybe<ScalarsEnums["Date"]>;
  nextPlan?: Maybe<NextPlanObjectType>;
  plan: PlanObjectType;
  priceId?: Maybe<ScalarsEnums["UUID"]>;
  tenantId: ScalarsEnums["UUID"];
}

export interface AccountQuotaObjectType {
  __typename?: "AccountQuotaObjectType";
  id: ScalarsEnums["UUID"];
  lastRefresh?: Maybe<ScalarsEnums["Date"]>;
  nextRefresh?: Maybe<ScalarsEnums["Date"]>;
  tenantId: ScalarsEnums["UUID"];
  transactions: Array<PlanQuotaTransactionObjectType>;
}

export interface ApplicationTokenObjectType {
  __typename?: "ApplicationTokenObjectType";
  createdAt: ScalarsEnums["Date"];
  id: ScalarsEnums["UUID"];
  title: ScalarsEnums["String"];
}

export interface AudioDataObjectType {
  __typename?: "AudioDataObjectType";
  audioUrl: ScalarsEnums["String"];
  customData?: Maybe<ScalarsEnums["JSON"]>;
  fileId: ScalarsEnums["UUID"];
}

export interface AudioObjectType {
  __typename?: "AudioObjectType";
  data: AudioDataObjectType;
  elementId: ScalarsEnums["UUID"];
}

export interface AudioPayloadObjectType {
  __typename?: "AudioPayloadObjectType";
  audioUrl: ScalarsEnums["String"];
}

export interface AuthResultType {
  __typename?: "AuthResultType";
  accessToken: ScalarsEnums["String"];
  accessTokenTtl: ScalarsEnums["Float"];
  refreshToken: ScalarsEnums["String"];
  refreshTokenTtl: ScalarsEnums["Float"];
  userId: ScalarsEnums["UUID"];
}

export interface CalculateUpgradeObjectType {
  __typename?: "CalculateUpgradeObjectType";
  discount: ScalarsEnums["Float"];
  plusDays: ScalarsEnums["Float"];
  price?: Maybe<Money>;
}

export interface CheckConfirmRequestObjectType {
  __typename?: "CheckConfirmRequestObjectType";
  authResult?: Maybe<AuthResultType>;
  id?: Maybe<ScalarsEnums["UUID"]>;
}

export interface ComponentDataObjectType {
  __typename?: "ComponentDataObjectType";
  componentId?: Maybe<ScalarsEnums["UUID"]>;
  customData?: Maybe<ScalarsEnums["JSON"]>;
  elementId?: Maybe<ScalarsEnums["UUID"]>;
  mainElementId?: Maybe<ScalarsEnums["UUID"]>;
  nextStepId?: Maybe<ScalarsEnums["UUID"]>;
  sort?: Maybe<ScalarsEnums["Float"]>;
  stepId?: Maybe<ScalarsEnums["UUID"]>;
  title?: Maybe<ScalarsEnums["String"]>;
  type: ScalarsEnums["ComponentType"];
}

export interface ComponentObjectType {
  __typename?: "ComponentObjectType";
  data: ComponentDataObjectType;
  id: ScalarsEnums["UUID"];
}

export interface CreateConfirmRequestObjectType {
  __typename?: "CreateConfirmRequestObjectType";
  id: ScalarsEnums["UUID"];
}

export interface ElementDataObjectType {
  __typename?: "ElementDataObjectType";
  componentId?: Maybe<ScalarsEnums["UUID"]>;
  customData?: Maybe<ScalarsEnums["JSON"]>;
  elementId?: Maybe<ScalarsEnums["UUID"]>;
  sort?: Maybe<ScalarsEnums["Float"]>;
  type?: Maybe<ScalarsEnums["ElementType"]>;
}

export interface ElementObjectType {
  __typename?: "ElementObjectType";
  data: ElementDataObjectType;
  id: ScalarsEnums["UUID"];
  styles?: Maybe<Array<StyleObjectType>>;
}

export interface ErrorObjectType {
  __typename?: "ErrorObjectType";
  auth: ScalarsEnums["AuthErrorTypes"];
}

export interface FilePayloadUnion {
  __typename?: "AudioObjectType" | "ImageObjectType" | "VideoObjectType";
  $on: $FilePayloadUnion;
}

export interface FileProcessedObjectType {
  __typename?: "FileProcessedObjectType";
  elementId: ScalarsEnums["UUID"];
  error?: Maybe<ScalarsEnums["String"]>;
  fileId: ScalarsEnums["UUID"];
  fileType: ScalarsEnums["FileType"];
  funnelId: ScalarsEnums["UUID"];
  payload: FileProcessedResultUnion;
  scope: ScalarsEnums["Scope"];
  tenantId: ScalarsEnums["UUID"];
  visitId?: Maybe<ScalarsEnums["UUID"]>;
}

export interface FileProcessedResultUnion {
  __typename?:
  | "AudioPayloadObjectType"
  | "ImagePayloadObjectType"
  | "VideoPayloadObjectType";
  $on: $FileProcessedResultUnion;
}

export interface FunnelAggregateObjectType {
  __typename?: "FunnelAggregateObjectType";
  code: ScalarsEnums["String"];
  id: ScalarsEnums["UUID"];
  image?: Maybe<ScalarsEnums["String"]>;
  published: ScalarsEnums["Boolean"];
  title: ScalarsEnums["String"];
}

export interface FunnelObjectType {
  __typename?: "FunnelObjectType";
  code: ScalarsEnums["String"];
  components: Array<ComponentObjectType>;
  deletedAt?: Maybe<ScalarsEnums["Date"]>;
  elements: Array<ElementObjectType>;
  files: Array<FilePayloadUnion>;
  groups: Array<GroupObjectType>;
  id: ScalarsEnums["UUID"];
  isPublished: ScalarsEnums["Boolean"];
  lastEdit?: Maybe<ScalarsEnums["Date"]>;
  steps: Array<StepObjectType>;
  styles: Array<StyleObjectType>;
  tenantId: ScalarsEnums["UUID"];
  title: ScalarsEnums["String"];
}

export interface GetAccountObjectType {
  __typename?: "GetAccountObjectType";
  accountPlan: AccountPlanWithPlanObjectType;
  dateCreate: ScalarsEnums["Date"];
  payments: Array<PaymentObjectType>;
  quota: AccountQuotaObjectType;
  quotas: Array<QuotaBalanceObjectType>;
  tenantId: ScalarsEnums["UUID"];
}

export interface GetFileObjectType {
  __typename?: "GetFileObjectType";
  previewFileUrl?: Maybe<ScalarsEnums["String"]>;
  processedFileUrl?: Maybe<ScalarsEnums["String"]>;
  rawFileUrl?: Maybe<ScalarsEnums["String"]>;
  type: ScalarsEnums["FileType"];
}

export interface GetFunnelsObjectType {
  __typename?: "GetFunnelsObjectType";
  items: Array<FunnelAggregateObjectType>;
}

export interface GetPlansObjectType {
  __typename?: "GetPlansObjectType";
  items: Array<PlanResponseObjectType>;
}

export interface GetVisitObjectType {
  __typename?: "GetVisitObjectType";
  dateCreate: ScalarsEnums["Date"];
  events: Array<VisitEventObjectType>;
  funnelSnapshotId: ScalarsEnums["UUID"];
  id: ScalarsEnums["UUID"];
  params?: Maybe<VisitParamsObjectType>;
  results: Array<VisitResultObjectType>;
  visitorId: ScalarsEnums["UUID"];
}

export interface GetVisitsObjectType {
  __typename?: "GetVisitsObjectType";
  items: Array<VisitItemObjectType>;
  pagination: PaginationResultObjectType;
}

export interface GroupDataObjectType {
  __typename?: "GroupDataObjectType";
  parentId?: Maybe<ScalarsEnums["String"]>;
  sort: ScalarsEnums["Float"];
  title: ScalarsEnums["String"];
}

export interface GroupObjectType {
  __typename?: "GroupObjectType";
  data: GroupDataObjectType;
  id: ScalarsEnums["UUID"];
}

export interface Handle3dsPaymentObjectType {
  __typename?: "Handle3dsPaymentObjectType";
  paymentId: ScalarsEnums["UUID"];
  status: ScalarsEnums["PaymentProcessStatus"];
}

export interface IdResultObjectType {
  __typename?: "IdResultObjectType";
  id: ScalarsEnums["UUID"];
}

export interface ImageDataObjectType {
  __typename?: "ImageDataObjectType";
  customData?: Maybe<ScalarsEnums["JSON"]>;
  fileId: ScalarsEnums["UUID"];
  imageUrl: ScalarsEnums["String"];
}

export interface ImageObjectType {
  __typename?: "ImageObjectType";
  data: ImageDataObjectType;
  elementId: ScalarsEnums["UUID"];
}

export interface ImagePayloadObjectType {
  __typename?: "ImagePayloadObjectType";
  imageUrl: ScalarsEnums["String"];
}

export interface IntegrationObjectType {
  __typename?: "IntegrationObjectType";
  configuration?: Maybe<ScalarsEnums["JSON"]>;
  isEnabled: ScalarsEnums["Boolean"];
  service: ScalarsEnums["IntegrationServiceType"];
  updatedAt?: Maybe<ScalarsEnums["Date"]>;
}

export interface IssueApplicationTokenResultType {
  __typename?: "IssueApplicationTokenResultType";
  token: ScalarsEnums["String"];
}

export interface LoginResultType {
  __typename?: "LoginResultType";
  authResult?: Maybe<AuthResultType>;
  id: ScalarsEnums["UUID"];
  twoFactorMethod?: Maybe<ScalarsEnums["String"]>;
}

export interface ManyIdsResultObjectType {
  __typename?: "ManyIdsResultObjectType";
  ids: Array<ScalarsEnums["UUID"]>;
}

export interface Money {
  __typename?: "Money";
  currency: ScalarsEnums["String"];
  value: ScalarsEnums["Float"];
}

export interface NextPlanObjectType {
  __typename?: "NextPlanObjectType";
  dateApply: ScalarsEnums["Date"];
  id: ScalarsEnums["UUID"];
  planId: ScalarsEnums["UUID"];
  tenantId: ScalarsEnums["UUID"];
}

export interface OgDataObjectType {
  __typename?: "OgDataObjectType";
  fields: ScalarsEnums["JSON"];
}

export interface PaginationResultObjectType {
  __typename?: "PaginationResultObjectType";
  total: ScalarsEnums["Float"];
}

export interface PaymentObjectType {
  __typename?: "PaymentObjectType";
  accountId: ScalarsEnums["UUID"];
  dateCreate: ScalarsEnums["Date"];
  dateUpdate?: Maybe<ScalarsEnums["Date"]>;
  id: ScalarsEnums["UUID"];
  payload: ScalarsEnums["JSON"];
  paymentSystemId: ScalarsEnums["UUID"];
  status: ScalarsEnums["PaymentStatus"];
  tenantId: ScalarsEnums["UUID"];
}

export interface PlanFeatureObjectType {
  __typename?: "PlanFeatureObjectType";
  id: ScalarsEnums["UUID"];
  planId: ScalarsEnums["UUID"];
  tenantId: ScalarsEnums["UUID"];
  type: ScalarsEnums["PlanFeatureType"];
}

export interface PlanFeatureResponseObjectType {
  __typename?: "PlanFeatureResponseObjectType";
  type: ScalarsEnums["String"];
}

export interface PlanLimitObjectType {
  __typename?: "PlanLimitObjectType";
  id: ScalarsEnums["UUID"];
  planId: ScalarsEnums["UUID"];
  tenantId: ScalarsEnums["UUID"];
  type: ScalarsEnums["String"];
  value?: Maybe<ScalarsEnums["Float"]>;
}

export interface PlanLimitResponseObjectType {
  __typename?: "PlanLimitResponseObjectType";
  type: ScalarsEnums["String"];
  value?: Maybe<ScalarsEnums["Float"]>;
}

export interface PlanObjectType {
  __typename?: "PlanObjectType";
  code: ScalarsEnums["Plans"];
  features: Array<PlanFeatureObjectType>;
  id: ScalarsEnums["UUID"];
  limits: Array<PlanLimitObjectType>;
  quotas: Array<PlanQuotaObjectType>;
  tenantId: ScalarsEnums["UUID"];
}

export interface PlanPriceDiscountObjectType {
  __typename?: "PlanPriceDiscountObjectType";
  fromQuantity: ScalarsEnums["Float"];
  value: ScalarsEnums["Float"];
}

export interface PlanPriceObjectType {
  __typename?: "PlanPriceObjectType";
  country?: Maybe<ScalarsEnums["String"]>;
  currency: ScalarsEnums["String"];
  default?: Maybe<ScalarsEnums["Boolean"]>;
  discounts: Array<PlanPriceDiscountObjectType>;
  id: ScalarsEnums["UUID"];
  planId: ScalarsEnums["String"];
  tenantId: ScalarsEnums["UUID"];
  type: ScalarsEnums["String"];
  value: ScalarsEnums["Float"];
}

export interface PlanQuotaObjectType {
  __typename?: "PlanQuotaObjectType";
  id: ScalarsEnums["UUID"];
  planId: ScalarsEnums["UUID"];
  refreshable?: Maybe<ScalarsEnums["Boolean"]>;
  tenantId: ScalarsEnums["UUID"];
  type: ScalarsEnums["String"];
  value: ScalarsEnums["Float"];
}

export interface PlanQuotaResponseObjectType {
  __typename?: "PlanQuotaResponseObjectType";
  refreshable?: Maybe<ScalarsEnums["Boolean"]>;
  type: ScalarsEnums["String"];
  value: ScalarsEnums["Float"];
}

export interface PlanQuotaTransactionObjectType {
  __typename?: "PlanQuotaTransactionObjectType";
  accountPlanId: ScalarsEnums["UUID"];
  accountQuotaId: ScalarsEnums["String"];
  balance: ScalarsEnums["Float"];
  credit: ScalarsEnums["Float"];
  debit: ScalarsEnums["Float"];
  id: ScalarsEnums["UUID"];
  quotaType: ScalarsEnums["PlanQuotaType"];
  tenantId: ScalarsEnums["UUID"];
}

export interface PlanResponseObjectType {
  __typename?: "PlanResponseObjectType";
  annualDiscount?: Maybe<ScalarsEnums["Float"]>;
  code: ScalarsEnums["String"];
  custom?: Maybe<ScalarsEnums["Boolean"]>;
  customPrice?: Maybe<ScalarsEnums["Boolean"]>;
  features: Array<PlanFeatureResponseObjectType>;
  free?: Maybe<ScalarsEnums["Boolean"]>;
  id: ScalarsEnums["UUID"];
  limits: Array<PlanLimitResponseObjectType>;
  prices: Array<PlanPriceObjectType>;
  quotas: Array<PlanQuotaResponseObjectType>;
  trialDays?: Maybe<ScalarsEnums["Float"]>;
}

export interface PointObjectType {
  __typename?: "PointObjectType";
  x: ScalarsEnums["Float"];
  y: ScalarsEnums["Float"];
}

export interface QuotaBalanceObjectType {
  __typename?: "QuotaBalanceObjectType";
  balance: ScalarsEnums["Float"];
  type: ScalarsEnums["PlanQuotaType"];
}

export interface RefreshTokenObjectType {
  __typename?: "RefreshTokenObjectType";
  accessToken: ScalarsEnums["String"];
}

export interface RequestAccountPlanChangeDowngradeObjectType {
  __typename?: "RequestAccountPlanChangeDowngradeObjectType";
  dateApply: ScalarsEnums["Date"];
}

export interface RequestAccountPlanChangeUpgradeObjectType {
  __typename?: "RequestAccountPlanChangeUpgradeObjectType";
  paymentId?: Maybe<ScalarsEnums["UUID"]>;
  price?: Maybe<Money>;
  redirect?: Maybe<ScalarsEnums["String"]>;
  status: ScalarsEnums["PaymentProcessStatus"];
}

export interface RequestPlanChangeObjectType {
  __typename?: "RequestPlanChangeObjectType";
  downgrade?: Maybe<RequestAccountPlanChangeDowngradeObjectType>;
  upgrade?: Maybe<RequestAccountPlanChangeUpgradeObjectType>;
}

export interface ScreenResolutionObjectType {
  __typename?: "ScreenResolutionObjectType";
  height: ScalarsEnums["Float"];
  width: ScalarsEnums["Float"];
}

export interface StepDataObjectType {
  __typename?: "StepDataObjectType";
  customData?: Maybe<ScalarsEnums["JSON"]>;
  final?: Maybe<ScalarsEnums["Boolean"]>;
  groupId?: Maybe<ScalarsEnums["UUID"]>;
  nextStep?: Maybe<ScalarsEnums["UUID"]>;
  point: PointObjectType;
  sort?: Maybe<ScalarsEnums["Float"]>;
  title?: Maybe<ScalarsEnums["String"]>;
}

export interface StepObjectType {
  __typename?: "StepObjectType";
  components: Array<ComponentObjectType>;
  data: StepDataObjectType;
  first?: Maybe<ScalarsEnums["Boolean"]>;
  id: ScalarsEnums["UUID"];
  type: ScalarsEnums["StepType"];
}

export interface StyleDataObjectType {
  __typename?: "StyleDataObjectType";
  customData?: Maybe<ScalarsEnums["JSON"]>;
}

export interface StyleObjectType {
  __typename?: "StyleObjectType";
  componentId?: Maybe<ScalarsEnums["UUID"]>;
  data: StyleDataObjectType;
  elementId?: Maybe<ScalarsEnums["UUID"]>;
  id: ScalarsEnums["UUID"];
  type: ScalarsEnums["StyleType"];
}

export interface TrackerObjectType {
  __typename?: "TrackerObjectType";
  isEnabled: ScalarsEnums["Boolean"];
  service: ScalarsEnums["TrackerServiceType"];
  trackerId?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["Date"]>;
}

export interface TrackerShortObjectType {
  __typename?: "TrackerShortObjectType";
  isEnabled: ScalarsEnums["Boolean"];
  service: ScalarsEnums["TrackerServiceType"];
  trackerId?: Maybe<ScalarsEnums["String"]>;
}

export interface UserObjectType {
  __typename?: "UserObjectType";
  email: ScalarsEnums["String"];
  firstname: ScalarsEnums["String"];
  id: ScalarsEnums["UUID"];
  lastname: ScalarsEnums["String"];
  phone?: Maybe<ScalarsEnums["String"]>;
  tenantId: ScalarsEnums["String"];
}

export interface VideoDataObjectType {
  __typename?: "VideoDataObjectType";
  customData?: Maybe<ScalarsEnums["JSON"]>;
  fileId: ScalarsEnums["UUID"];
  previewUrl?: Maybe<ScalarsEnums["String"]>;
  videoUrl: ScalarsEnums["String"];
}

export interface VideoObjectType {
  __typename?: "VideoObjectType";
  data: VideoDataObjectType;
  elementId: ScalarsEnums["UUID"];
}

export interface VideoPayloadObjectType {
  __typename?: "VideoPayloadObjectType";
  previewUrl: ScalarsEnums["String"];
  videoUrl: ScalarsEnums["String"];
}

export interface ViewFunnelObjectType {
  __typename?: "ViewFunnelObjectType";
  code: ScalarsEnums["String"];
  components: Array<ComponentObjectType>;
  deletedAt?: Maybe<ScalarsEnums["Date"]>;
  elements: Array<ElementObjectType>;
  files: Array<FilePayloadUnion>;
  groups: Array<GroupObjectType>;
  id: ScalarsEnums["UUID"];
  isPublished: ScalarsEnums["Boolean"];
  lastEdit?: Maybe<ScalarsEnums["Date"]>;
  snapshotId: ScalarsEnums["UUID"];
  steps: Array<StepObjectType>;
  styles: Array<StyleObjectType>;
  tenantId: ScalarsEnums["UUID"];
  title: ScalarsEnums["String"];
  trackers: Array<TrackerShortObjectType>;
}

export interface VisitEventObjectType {
  __typename?: "VisitEventObjectType";
  componentId?: Maybe<ScalarsEnums["UUID"]>;
  id: ScalarsEnums["UUID"];
  payload?: Maybe<ScalarsEnums["JSON"]>;
  stepId?: Maybe<ScalarsEnums["UUID"]>;
  tenantId: ScalarsEnums["UUID"];
  type: ScalarsEnums["VisitorEventType"];
  visitId: ScalarsEnums["UUID"];
}

export interface VisitItemObjectType {
  __typename?: "VisitItemObjectType";
  dateCreate: ScalarsEnums["Date"];
  id: ScalarsEnums["UUID"];
  params?: Maybe<VisitParamsObjectType>;
  visitorId: ScalarsEnums["UUID"];
}

export interface VisitParamsObjectType {
  __typename?: "VisitParamsObjectType";
  cookiesEnabled?: Maybe<ScalarsEnums["Boolean"]>;
  deviceMemory?: Maybe<ScalarsEnums["Float"]>;
  hardwareConcurrency?: Maybe<ScalarsEnums["Float"]>;
  ip?: Maybe<ScalarsEnums["String"]>;
  languages?: Maybe<ScalarsEnums["String"]>;
  platform?: Maybe<ScalarsEnums["String"]>;
  screenResolution?: Maybe<ScreenResolutionObjectType>;
  timezone?: Maybe<ScalarsEnums["String"]>;
  userAgent?: Maybe<ScalarsEnums["String"]>;
  vendor?: Maybe<ScalarsEnums["String"]>;
  videoCard?: Maybe<ScalarsEnums["String"]>;
}

export interface VisitResultObjectType {
  __typename?: "VisitResultObjectType";
  componentId: ScalarsEnums["UUID"];
  id: ScalarsEnums["UUID"];
  payload: VisitResultPayloadUnion;
  stepId?: Maybe<ScalarsEnums["UUID"]>;
  tenantId: ScalarsEnums["UUID"];
  type: ScalarsEnums["VisitorResultType"];
  visitId: ScalarsEnums["UUID"];
}

export interface VisitResultPayloadAudioObjectType {
  __typename?: "VisitResultPayloadAudioObjectType";
  audioUrl: ScalarsEnums["String"];
  fileId: ScalarsEnums["UUID"];
  fileType: ScalarsEnums["FileType"];
}

export interface VisitResultPayloadImageObjectType {
  __typename?: "VisitResultPayloadImageObjectType";
  fileId: ScalarsEnums["UUID"];
  fileType: ScalarsEnums["FileType"];
  imageUrl: ScalarsEnums["String"];
}

export interface VisitResultPayloadTextObjectType {
  __typename?: "VisitResultPayloadTextObjectType";
  text: ScalarsEnums["String"];
}

export interface VisitResultPayloadUnion {
  __typename?:
  | "VisitResultPayloadAudioObjectType"
  | "VisitResultPayloadImageObjectType"
  | "VisitResultPayloadTextObjectType"
  | "VisitResultPayloadVideoObjectType";
  $on: $VisitResultPayloadUnion;
}

export interface VisitResultPayloadVideoObjectType {
  __typename?: "VisitResultPayloadVideoObjectType";
  fileId: ScalarsEnums["UUID"];
  fileType: ScalarsEnums["FileType"];
  previewUrl: ScalarsEnums["String"];
  videoUrl: ScalarsEnums["String"];
}

export interface ZapierTriggerEventObjectType {
  __typename?: "ZapierTriggerEventObjectType";
  dateCreate: ScalarsEnums["Date"];
  funnel: FunnelAggregateObjectType;
  id: ScalarsEnums["UUID"];
  payload: ScalarsEnums["JSON"];
  type: ScalarsEnums["ZapierTriggerEventType"];
}

export interface ZapierTriggerEventsObjectType {
  __typename?: "ZapierTriggerEventsObjectType";
  items: Array<ZapierTriggerEventObjectType>;
  pagination: PaginationResultObjectType;
}

export interface Mutation {
  __typename?: "Mutation";
  calculatePlanChange: (args: {
    data: CalculateUpgradeInputType;
  }) => CalculateUpgradeObjectType;
  cancelNextPlan: IdResultObjectType;
  changePassword: (args: { data: ChangePasswordInputType }) => UserObjectType;
  checkConfirmRequest: (args: {
    data: CheckConfirmRequestInputType;
  }) => CheckConfirmRequestObjectType;
  createComponent: (args: {
    data: CreateComponentInputType;
  }) => ComponentObjectType;
  createConfirmRequest: (args: {
    data: CreateConfirmRequestInputType;
  }) => CreateConfirmRequestObjectType;
  createElement: (args: { data: CreateElementInputType }) => ElementObjectType;
  createFunnel: (args: { data: CreateFunnelInputType }) => IdResultObjectType;
  createGroup: (args: { data: CreateGroupInputType }) => GroupObjectType;
  createManyComponents: (args: {
    data: CreateManyComponentsInputType;
  }) => Array<ComponentObjectType>;
  createManyVisitResults: (args: {
    data: CreateManyResultsMessageInputType;
  }) => ManyIdsResultObjectType;
  createStep: (args: { data: CreateStepInputType }) => StepObjectType;
  createStyle: (args: { data: CreateStyleInputType }) => StyleObjectType;
  createVisit: (args: { data: CreateVisitInputType }) => IdResultObjectType;
  createVisitEvent: (args: {
    data: CreateEventMessageInputType;
  }) => IdResultObjectType;
  createVisitResult: (args: {
    data: CreateResultMessageInputType;
  }) => IdResultObjectType;
  deleteComponent: (args: {
    data: DeleteComponentInputType;
  }) => IdResultObjectType;
  deleteElement: (args: { data: DeleteElementInputType }) => IdResultObjectType;
  deleteFunnel: (args: { data: DeleteFunnelInputType }) => IdResultObjectType;
  deleteGroup: (args: { data: DeleteGroupInputType }) => IdResultObjectType;
  deleteManySteps: (args: {
    data: DeleteManyStepsInputType;
  }) => ManyIdsResultObjectType;
  deleteStep: (args: { data: DeleteStepInputType }) => IdResultObjectType;
  deleteStyle: (args: { data: DeleteStyleInputType }) => IdResultObjectType;
  errors: ErrorObjectType;
  handle3ds: (args: { data: Handle3dsInputType }) => Handle3dsPaymentObjectType;
  issueApplicationToken: (args: {
    data: IssueApplicationTokenInputType;
  }) => IssueApplicationTokenResultType;
  logout: IdResultObjectType;
  publishFunnel: (args: { data: PublishFunnelInputType }) => IdResultObjectType;
  refresh: (args: { data: RefreshTokenInputType }) => RefreshTokenObjectType;
  register: (args: { data: RegisterInputType }) => LoginResultType;
  requestPlanChange: (args: {
    data: RequestPlanChangeInputType;
  }) => RequestPlanChangeObjectType;
  revokeApplicationToken: (args: {
    data: RevokeApplicationTokenInputType;
  }) => IdResultObjectType;
  twoFactorValidate: (args: {
    data: ValidateTwoFactorInputType;
  }) => AuthResultType;
  updateComponent: (args: {
    data: UpdateComponentInputType;
  }) => IdResultObjectType;
  updateElement: (args: { data: UpdateElementInputType }) => IdResultObjectType;
  updateFunnel: (args: { data: UpdateFunnelInputType }) => IdResultObjectType;
  updateGroup: (args: { data: UpdateGroupInputType }) => IdResultObjectType;
  updateIntegration: (args: {
    data: UpdateIntegrationInputType;
  }) => IdResultObjectType;
  updateManyComponents: (args: {
    data: UpdateManyComponentsInputType;
  }) => ManyIdsResultObjectType;
  updateManySteps: (args: {
    data: UpdateManyStepsInputType;
  }) => ManyIdsResultObjectType;
  updateStep: (args: { data: UpdateStepInputType }) => IdResultObjectType;
  updateStyle: (args: { data: UpdateStyleInputType }) => IdResultObjectType;
  updateTracker: (args: { data: UpdateTrackerInputType }) => IdResultObjectType;
  updateUser: (args: { data: UpdateUserInputType }) => UserObjectType;
  uploadCustomerFile: (args: {
    data: UploadCustomerFileInputType;
    file: Scalars["Upload"];
  }) => IdResultObjectType;
  uploadFile: (args: {
    data: UploadFileInputType;
    file: Scalars["Upload"];
  }) => IdResultObjectType;
}

export interface Query {
  __typename?: "Query";
  getAccount: GetAccountObjectType;
  getAllFunnels: (args?: {
    data?: Maybe<GetAllFunnelsInputType>;
  }) => GetFunnelsObjectType;
  getApplicationTokens: Array<ApplicationTokenObjectType>;
  getFile: (args: { data: GetFileInputType }) => GetFileObjectType;
  getFunnel: (args: { data: GetFunnelInputType }) => FunnelObjectType;
  getIntegrations: (args: {
    data: GetIntegrationsInputType;
  }) => Array<IntegrationObjectType>;
  getOgData: (args: { data: GetOgData }) => OgDataObjectType;
  getPlans: (args: { data: GetPlansInputType }) => GetPlansObjectType;
  getTrackers: (args: {
    data: GetTrackersInputType;
  }) => Array<TrackerObjectType>;
  getVisit: (args: { data: GetVisitInputType }) => GetVisitObjectType;
  getVisits: (args: { data: GetVisitsInputType }) => GetVisitsObjectType;
  getZapierTriggerEvents: (args: {
    filter: ZapierTriggerEventFilterInputType;
    pagination?: Maybe<PaginationInputType>;
  }) => ZapierTriggerEventsObjectType;
  me: UserObjectType;
  viewFunnel: (args: { data: ViewFunnelInputType }) => ViewFunnelObjectType;
}

export interface Subscription {
  __typename?: "Subscription";
  onFileProcessed: FileProcessedObjectType;
}

export interface $FilePayloadUnion {
  AudioObjectType?: AudioObjectType;
  ImageObjectType?: ImageObjectType;
  VideoObjectType?: VideoObjectType;
}

export interface $FileProcessedResultUnion {
  AudioPayloadObjectType?: AudioPayloadObjectType;
  ImagePayloadObjectType?: ImagePayloadObjectType;
  VideoPayloadObjectType?: VideoPayloadObjectType;
}

export interface $VisitResultPayloadUnion {
  VisitResultPayloadAudioObjectType?: VisitResultPayloadAudioObjectType;
  VisitResultPayloadImageObjectType?: VisitResultPayloadImageObjectType;
  VisitResultPayloadTextObjectType?: VisitResultPayloadTextObjectType;
  VisitResultPayloadVideoObjectType?: VisitResultPayloadVideoObjectType;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  AuthErrorTypes: AuthErrorTypes | undefined;
  AuthSource: AuthSource | undefined;
  ComponentType: ComponentType | undefined;
  ConfirmType: ConfirmType | undefined;
  ElementType: ElementType | undefined;
  FileType: FileType | undefined;
  IntegrationServiceType: IntegrationServiceType | undefined;
  PaymentProcessStatus: PaymentProcessStatus | undefined;
  PaymentStatus: PaymentStatus | undefined;
  PlanFeatureType: PlanFeatureType | undefined;
  PlanQuotaType: PlanQuotaType | undefined;
  Plans: Plans | undefined;
  Scope: Scope | undefined;
  StepType: StepType | undefined;
  StyleType: StyleType | undefined;
  TrackerServiceType: TrackerServiceType | undefined;
  TwoFactorMethod: TwoFactorMethod | undefined;
  VisitorEventType: VisitorEventType | undefined;
  VisitorResultType: VisitorResultType | undefined;
  ZapierTriggerEventType: ZapierTriggerEventType | undefined;
}
