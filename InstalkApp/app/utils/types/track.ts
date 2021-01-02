import { UserObject, TargetObject } from "./"

export interface TrackObject {
  id: number
  stalkerId?: number
  targetId?: number
  createdAt?: Date | string
  updatedAt?: Date | string

  stalker?: UserObject
  target?: TargetObject
}
