export interface GetLineDetailsAPIResponse {
  id: string;
  type?: SlacklineType;
  creatorUserId: string;
  name?: string;
  description?: string;
  city?: string;
  length?: number;
  height?: number;
  accessInfo?: string;
  anchorsInfo?: string;
  gearInfo?: string;
  contactInfo?: string;
  restrictionLevel?: SlacklineRestrictionLevel;
  extraInfo?: string;
  coverImageUrl?: string;
  createdDateTime: string;
  lastModifiedDateTime?: string;
  restrictionInfo?: string;
  isMeasurementAccurate?: boolean;
}

export interface GetSpotDetailsAPIResponse {
  id: string;
  creatorUserId: string;
  name?: string;
  description?: string;
  accessInfo?: string;
  contactInfo?: string;
  restrictionLevel?: SlacklineRestrictionLevel;
  extraInfo?: string;
  coverImageUrl?: string;
  createdDateTime: string;
  lastModifiedDateTime?: string;
  restrictionInfo?: string;
}