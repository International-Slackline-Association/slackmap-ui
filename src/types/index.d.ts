type UserIdentityType = 'individual' | 'organization';
type SlacklineType =
  | 'highline'
  | 'waterline'
  | 'midline'
  | 'longline'
  | 'trickline'
  | 'rodeoline'
  | 'parkline'
  | 'other';
type SlacklineRestrictionLevel = 'partial' | 'full' | 'none';
type MapSlacklineFeatureType = 'line' | 'spot' | 'guide';
type MapCommunityFeatureType = 'slacklineGroup' | 'managedArea';

type GuideType =
  | 'parkingLot'
  | 'campingSpot'
  | 'accessPath'
  | 'riggingPath'
  | 'information'
  | 'other';
