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
    location: EntryFieldTypes.Text,
    time: EntryFieldTypes.Text,
    description: EntryFieldTypes.RichText,
  }
}