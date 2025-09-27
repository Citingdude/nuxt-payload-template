export interface HubspotForm {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  archived: boolean
  configuration: Configuration
  displayOptions: DisplayOptions
  fieldGroups: HubspotFieldGroup[]
  formType: string
  legalConsentOptions: LegalConsentOptions
}

export interface HubspotFieldGroup {
  fields: HubspotField[]
  groupType: string
  richTextType: string
}

export interface HubspotFieldOption {
  description: string
  displayOrder: number
  label: string
  value: string
}

export interface HubspotField {
  objectTypeId: string
  name: string
  fieldType: 'dropdown' | 'email' | 'multi_line_text' | 'multiple_checkboxes' | 'number' | 'phone' | 'radio' | 'single_line_text'
  hidden: boolean
  label: string
  options?: HubspotFieldOption[]
  required: boolean
  validation?: Validation
}

export interface Validation {
  blockedEmailDomains?: string[]
  maxAllowedDigits?: number
  minAllowedDigits?: number
  useDefaultBlockList?: boolean
}

export interface Configuration {
  allowLinkToResetKnownValues: boolean
  archivable: boolean
  cloneable: boolean
  createNewContactForNewEmail: boolean
  editable: boolean
  language: string
  lifecycleStages: LifecycleStage[]
  notifyContactOwner: boolean
  notifyRecipients: any[]
  postSubmitAction: PostSubmitAction
  prePopulateKnownValues: boolean
  recaptchaEnabled: boolean
}

export interface PostSubmitAction {
  type: string
  value: string
}

export interface LifecycleStage {
  objectTypeId: string
  value: string
}

export interface DisplayOptions {
  cssClass: string
  renderRawHtml: boolean
  style: Style
  submitButtonText: string
  theme: string
}

export interface Style {
  backgroundWidth: string
  fontFamily: string
  helpTextColor: string
  helpTextSize: string
  labelTextColor: string
  labelTextSize: string
  legalConsentTextColor: string
  legalConsentTextSize: string
  submitAlignment: string
  submitColor: string
  submitFontColor: string
  submitSize: string
}

export interface LegalConsentOptions {
  lawfulBasis: string
  privacyText: string
  subscriptionTypeIds: number[]
  type: string
}
