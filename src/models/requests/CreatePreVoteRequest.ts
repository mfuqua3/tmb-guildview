import {ExpirationConfiguration} from "../core/ExpirationConfiguration";
import {ItemSelectionConfiguration} from "../core/ItemSelectionConfiguration";
import {VoterSelectionConfiguration} from "../core/VoterSelectionConfiguration";
import {ConflictOfInterestConfiguration} from "../core/ConflictOfInterestConfiguration";
import {TransparencyConfiguration} from "../core/TransparencyConfiguration";

export interface CreatePreVoteRequest {
    expirationConfiguration?: ExpirationConfiguration;
    itemSelection? :ItemSelectionConfiguration;
    voterSelection?: VoterSelectionConfiguration;
    conflictOfInterest?: ConflictOfInterestConfiguration;
    transparency?: TransparencyConfiguration;
}
