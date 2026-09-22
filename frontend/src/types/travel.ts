/**
 * Shared travel types for version 1.
 * Every travel record must include source_url, last_verified, and status
 * so the later AI assistant can refuse to invent facts.
 */

export type RecordStatus = 'sample' | 'unverified' | 'verified'

export type Destination = {
  id: string
  name: string
  city: string
  category: string
  short_description: string
  full_description: string
  image_url: string
  map_url: string
  source_url: string
  last_verified: string | null
  status: RecordStatus
}
