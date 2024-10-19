export enum VoiceId {
  alloy = "alloy",
  shimmer = "shimmer",
  echo = "echo",
  //cove = "cove",
}

export interface Voice {
  id: VoiceId;
  name: string;
}

export const voices: Voice[] = [
  {
    id: VoiceId.alloy,
    name: "Alloy",
  },
  {
    id: VoiceId.shimmer,
    name: "Shimmer",
  },
  {
    id: VoiceId.echo,
    name: "Echo",
  },
  /*
  {
    id: VoiceId.cove,
    name: "Cove",
  }
  */
];
