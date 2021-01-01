import { UserObject, TargetObject } from "./"

export interface TrackObject {
  id: number
  stalkerId?: number
  targetId?: number
  createdAt?: Date
  updatedAt?: Date

  stalker?: UserObject
  target?: TargetObject
}
