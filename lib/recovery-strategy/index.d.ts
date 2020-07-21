export interface RecoveryStrategy {
    startRecovery(): void;
    onRecovered(cb: () => void): void;
}
