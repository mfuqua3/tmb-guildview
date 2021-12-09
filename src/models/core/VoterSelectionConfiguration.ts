export interface VoterSelectionConfiguration {
    minimumVotersPerItem: number;
    maximumVotersPerItem: number;
    fixedVoters: number[];
    eligibleVoterIds: number[];
    ineligibleVoterIds: number[];
    eligibleVoterRoles: number[];
    randomize: boolean;
}
