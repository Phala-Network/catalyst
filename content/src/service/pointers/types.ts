import { DeploymentFilters, EntityId, EntityType, Pointer, Timestamp } from 'dcl-catalyst-commons'
import { AuthChain } from 'dcl-crypto'

export type PointerChangesFilters = Pick<DeploymentFilters, 'from' | 'to' | 'entityTypes'>

export type DeploymentPointerChanges = {
  entityType: EntityType
  entityId: EntityId
  localTimestamp: Timestamp
  authChain: AuthChain
  pointers: Pointer[]
}

export type PartialDeploymentPointerChanges = {
  pointerChanges: DeploymentPointerChanges[]
  filters: Omit<PointerChangesFilters, 'entityType'>
  pagination: {
    offset: number
    limit: number
    moreData: boolean
    lastId?: string
    next?: string
  }
}
