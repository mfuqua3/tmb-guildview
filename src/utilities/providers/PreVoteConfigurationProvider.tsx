import React, {createContext, ReactNode, SetStateAction, useContext, useState} from "react";
import {
    ConflictOfInterestConfiguration,
    CreatePreVoteRequest,
    ExpirationConfiguration,
    ItemSelectionConfiguration, PreVoteConfiguration, TransparencyConfiguration,
    VoterSelectionConfiguration
} from "../../models";
import {PreVoteApi} from "../../api/PreVoteApi";

interface ConfigState<T> {
    state: T | null;
    setState: React.Dispatch<SetStateAction<T | null>>
}

interface PreVoteConfigurationContextState {
    configStates: {
        expiration: ConfigState<ExpirationConfiguration>,
        itemSelection: ConfigState<ItemSelectionConfiguration>,
        voterSelection: ConfigState<VoterSelectionConfiguration>,
        conflictOfInterest: ConfigState<ConflictOfInterestConfiguration>,
        transparency: ConfigState<TransparencyConfiguration>
    }

    buildRequest(): CreatePreVoteRequest;

    initialize(): Promise<void>;

    loadPreviousConfig(): Promise<void>;

    canLoadPreviousConfig: boolean;
}

const PreVoteConfigurationContext = createContext<PreVoteConfigurationContextState | null>(null);

interface PreVoteConfigurationProviderProps {
    children: ReactNode;
}

function PreVoteConfigurationProvider({children}: PreVoteConfigurationProviderProps) {
    const [initialized, setInitialized] = useState(false);
    const [expirationConfig, setExpirationConfig] = useState<ExpirationConfiguration | null>(null);
    const [itemSelectionConfig, setItemSelectionConfig] = useState<ItemSelectionConfiguration | null>(null);
    const [voterSelectionConfig, setVoterSelectionConfig] = useState<VoterSelectionConfiguration | null>(null);
    const [conflictOfInterestConfig, setConflictOfInterestConfig] = useState<ConflictOfInterestConfiguration | null>(null);
    const [transparencyConfig, setTransparencyConfig] = useState<TransparencyConfiguration | null>(null);
    const [canLoadPrevious, setCanLoadPrevious] = useState(true);

    async function loadPreviousConfig(): Promise<void> {
        try {
            const result = await PreVoteApi.getConfiguration("latest");
            if (result === null) {
                setCanLoadPrevious(false);
                return;
            }
            updateStates(result);
        } catch {
            setCanLoadPrevious(false);
        }
    }

    async function initialize(): Promise<void> {
        if (initialized) {
            return;
        }
        const defaultConfig = await PreVoteApi.getConfiguration("default");
        if (defaultConfig === null) {
            throw new Error("No default configuration was found.");
        }
        updateStates(defaultConfig);
        setInitialized(true);
    }

    function updateStates(config: PreVoteConfiguration): void {
        const {
            expirationConfiguration,
            itemSelectionConfiguration,
            voterSelectionConfiguration,
            conflictOfInterestConfiguration,
            transparencyConfiguration
        } = config;
        setExpirationConfig(expirationConfiguration);
        setItemSelectionConfig(itemSelectionConfiguration);
        setVoterSelectionConfig(voterSelectionConfiguration);
        setConflictOfInterestConfig(conflictOfInterestConfiguration);
        setTransparencyConfig(transparencyConfiguration);
    }

    function buildRequest(): CreatePreVoteRequest {
        if (expirationConfig === null ||
            itemSelectionConfig === null ||
            voterSelectionConfig === null ||
            conflictOfInterestConfig === null ||
            transparencyConfig === null) {
            throw new Error("Can not build request, every config field must be defined");
        }
        return {
            expirationConfiguration: expirationConfig,
            itemSelection: itemSelectionConfig,
            voterSelection: voterSelectionConfig,
            conflictOfInterest: conflictOfInterestConfig,
            transparency: transparencyConfig
        }
    }

    const state: PreVoteConfigurationContextState = {
        configStates: {
            expiration: {state: expirationConfig, setState: setExpirationConfig},
            itemSelection: {state: itemSelectionConfig, setState: setItemSelectionConfig},
            voterSelection: {state: voterSelectionConfig, setState: setVoterSelectionConfig},
            conflictOfInterest: {state: conflictOfInterestConfig, setState: setConflictOfInterestConfig},
            transparency: {state: transparencyConfig, setState: setTransparencyConfig}
        },
        buildRequest,
        initialize,
        loadPreviousConfig,
        canLoadPreviousConfig: canLoadPrevious
    };
    return (
        <PreVoteConfigurationContext.Provider value={state}>
            {children}
        </PreVoteConfigurationContext.Provider>
    );
}

export function useExpirationConfig(): ConfigState<ExpirationConfiguration> {
    const state = useContext(PreVoteConfigurationContext);
    if (state === null) {
        throw new Error("Must be used within a PreVoteConfigurationContext");
    }
    return state.configStates.expiration;
}

export function useTransparencyConfig(): ConfigState<TransparencyConfiguration> {
    const state = useContext(PreVoteConfigurationContext);
    if (state === null) {
        throw new Error("Must be used within a PreVoteConfigurationContext");
    }
    return state.configStates.transparency;
}

export function useConflictOfInterestConfig(): ConfigState<ConflictOfInterestConfiguration> {
    const state = useContext(PreVoteConfigurationContext);
    if (state === null) {
        throw new Error("Must be used within a PreVoteConfigurationContext");
    }
    return state.configStates.conflictOfInterest;
}

export function useVoterSelectionConfig(): ConfigState<VoterSelectionConfiguration> {
    const state = useContext(PreVoteConfigurationContext);
    if (state === null) {
        throw new Error("Must be used within a PreVoteConfigurationContext");
    }
    return state.configStates.voterSelection;
}

export function useItemSelectionConfig(): ConfigState<ItemSelectionConfiguration> {
    const state = useContext(PreVoteConfigurationContext);
    if (state === null) {
        throw new Error("Must be used within a PreVoteConfigurationContext");
    }
    return state.configStates.itemSelection;
}

export function usePreVoteConfiguration(): PreVoteConfigurationContextState {

    const state = useContext(PreVoteConfigurationContext);
    if (state === null) {
        throw new Error("Must be used within a PreVoteConfigurationContext");
    }
    return state;
}

export default React.memo(PreVoteConfigurationProvider);
