import {VoteSubmissionRequirement} from "./VoteSubmissionRequirement";

export interface VoteVisibility {
    allowGuild: boolean;
    allowAllEligibleVoters: boolean;
    voteSubmissionRequirement: VoteSubmissionRequirement;

}
