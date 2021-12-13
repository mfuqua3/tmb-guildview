import {ExpirationConfiguration} from "./ExpirationConfiguration";
import {ItemSelectionConfiguration} from "./ItemSelectionConfiguration";
import {VoterSelectionConfiguration} from "./VoterSelectionConfiguration";
import {TransparencyConfiguration} from "./TransparencyConfiguration";
import {ConflictOfInterestConfiguration} from "./ConflictOfInterestConfiguration";

export interface PreVoteConfiguration {
    id?: number;
    expirationConfiguration: ExpirationConfiguration;
    itemSelectionConfiguration: ItemSelectionConfiguration;
    voterSelectionConfiguration: VoterSelectionConfiguration;
    conflictOfInterestConfiguration: ConflictOfInterestConfiguration;
    transparencyConfiguration: TransparencyConfiguration;
}
