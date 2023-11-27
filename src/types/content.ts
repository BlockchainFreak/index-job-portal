import { EntryFieldTypes } from "contentful"

export interface IJobSkeleton {
  contentTypeId: "job"
  fields: {
    title: EntryFieldTypes.Text,
    mode: EntryFieldTypes.Text,
    salary: EntryFieldTypes.Number,
    description: EntryFieldTypes.RichText,
  }
}

export interface IEventSkeleton {
  contentTypeId: "event"
  fields: {
    title: EntryFieldTypes.Text,
    cover: EntryFieldTypes.AssetLink,
    time: EntryFieldTypes.Text,
    description: EntryFieldTypes.RichText,
  }
}

export interface IMemberSkeleton {
  contentTypeId: "member"
  fields: {
    name: EntryFieldTypes.Text,
    position: EntryFieldTypes.Text,
    batch: EntryFieldTypes.Text,
    image?: EntryFieldTypes.AssetLink,
    level: EntryFieldTypes.Text,
    order: EntryFieldTypes.Number,
  }
}