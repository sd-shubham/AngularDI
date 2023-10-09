// export interface APPConfig{
//     isNewLoggerEnable: boolean
// }
const APP_CONFIG_VALUE = "app.config"
import { InjectionToken } from "@angular/core"

export type AppConfig = {
    isNewLoggerEnable: boolean
}


export const APP_CONFIG = new InjectionToken<AppConfig>(APP_CONFIG_VALUE,{
    factory: () => ({
        isNewLoggerEnable: false
    }),
});

export const Multi_True_Test = new InjectionToken<MultiTrueUseCase>("mult_true");

export type MultiTrueUseCase = {
    display: () => void
}
