import { SSocketProps } from 'servisofts-socket'
import { SThemeThemes } from 'servisofts-component'
const SThemeProps: SThemeThemes = {
    default: {
        barStyle: "dark-content",
        barColor: "#EC363F",
        primary: "#EC363F",
        secondary: "#ffffff",
        text: "#000000",
        background: "#ffffff",
        card: "#DDDDDD66",

    },
    dark: {
        barStyle: "light-content",
        barColor: "#A9030C",
        primary: "#A9030C",
        secondary: "#ffffff",
        background: "#000000",
        text: "#FFFFFF",
        card: "#ffffff44",
    }
}

const SocketProps: SSocketProps = {
    name: 'yoalquilo',
    host: '192.168.3.7',
    port: {
        native: 10022,
        web: 20022,
        http: 30022,
    },
    ssl: false,
    cert: "MIID3DCCAsSgAwIBAgIEYZWv2TANBgkqhkiG9w0BAQsFADCBrzELMAkGA1UEBhMCQk8xEjAQBgNVBAgMCUF2IEJhbnplcjETMBEGA1UEBwwKU2FudGEgQ3J1ejEXMBUGA1UECgwOU2Vydmlzb2Z0cyBTUkwxEjAQBgNVBAsMCXlvYWxxdWlsbzEhMB8GA1UEAwwYeW9hbHF1aWxvLnNlcnZpc29mdHMuY29tMScwJQYJKoZIhvcNAQkBFhhyaWNreS5wYXouZC45N0BnbWFpbC5jb20wHhcNMjExMTE4MDE0MzUzWhcNMjExMTE5MDE0MzU0WjCBrzELMAkGA1UEBhMCQk8xEjAQBgNVBAgMCUF2IEJhbnplcjETMBEGA1UEBwwKU2FudGEgQ3J1ejEXMBUGA1UECgwOU2Vydmlzb2Z0cyBTUkwxEjAQBgNVBAsMCXlvYWxxdWlsbzEhMB8GA1UEAwwYeW9hbHF1aWxvLnNlcnZpc29mdHMuY29tMScwJQYJKoZIhvcNAQkBFhhyaWNreS5wYXouZC45N0BnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDMHxngzJGSb8fAH2moI19zBPJKg16VPqfcF3dhW/kYnRDvTBvMaEh2WDEDmeJeMkE/2h1ei/B0Z8ST5rrivJJ0jMcIU54CVLqE3HLGMD6HlmVMJlOlpqadrg+OfODkA3xplijK0bNLfK5m1WMO4rHsz1rvZXr5z+Vycpi1HXmgb9Fd2p8Lrjx9yFT/YYTOjR5kJ1bQVKPgcM6BRbIk4iNcc1Rer5ER/QxBcE9GfKzgheVlR36NKDlZr7U/mR+gitXgvOGXE4nZG/XQrvSoCe3SmruG3gmKgJbgtVjUSrDLi1ZhC4vFQ4HAoWlmHvX2bVlL54YBKBcPztd5NzjtcEqJAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAA8ANLFzqL0fCsybB/7tYtDU2dgI4rylRGGkQ4/fchqtxUhnkvIec2QHzn4jXTbh/Fw7sQ2CX/t9kIVpXg34YrCQrA4NEwywmjOcBVpr12Ddx0yik3qNjqlm+YD0vhaiNe8deny8puda1VF4Fs5YpCtbSrlFHTHeNCNy6fVVRlt38aYikzkM0bXBMx+HMOyRcblGbYliiNHw4CYr6egtTHTjl3b0F/CrvhuVrv9MYcf6gqVvEWFiMAWF7yrGurj75iI/PzXKDcLuSd8O2gREw39U6FNrKMBLJ1ZObioEhQK8QVRzP9cixLLCWuXHYfxWtkLx+7/1f2UZsAUUsZJepTc=",
    apis: {
        servicio: "http://servicio.ss.lo/http/"
        // rp: "http://192.168.0.21:30016/"
    }
}
export default {
    SocketProps,
    SThemeProps
}