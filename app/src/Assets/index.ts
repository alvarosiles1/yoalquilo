import { SAssets } from 'servisofts-component'

import Logo, { ReactComponent as LogoW } from './svg/bateonIcon.svg';
import BateonBox, { ReactComponent as BateonBoxW } from './svg/bateonBox.svg';
import Mail, { ReactComponent as MailW } from './svg/Mail.svg';
import Bg1, { ReactComponent as Bg1W } from './svg/Bg1.svg';


import IconFaceb, { ReactComponent as IconFacebW } from './svg/iconFaceb.svg';
import IconGoogle, { ReactComponent as IconGoogleW } from './svg/iconGoogle.svg';

import IconMenuBg, { ReactComponent as IconMenuBgW } from './svg/iconMenuBg.svg';
import IconMenuCasa, { ReactComponent as IconMenuCasaW } from './svg/iconMenuCasa.svg';
import IconMenuCondominio, { ReactComponent as IconMenuCondominioW } from './svg/iconMenuCondominio.svg';
import IconMenuEdificio, { ReactComponent as IconMenuEdificioW } from './svg/iconMenuEdificio.svg';
import IconMenuMotel, { ReactComponent as IconMenuMotelW } from './svg/iconMenuMotel.svg';

const Assets: SAssets = {
    svg: {
        "Logo": { Native: Logo, Web: LogoW },
        "BateonBox": { Native: BateonBox, Web: BateonBoxW },
        "Mail": { Native: Mail, Web: MailW },
        "Bg1": { Native: Bg1, Web: Bg1W },


        "IconFaceb": { Native: IconFaceb, Web: IconFacebW },
        "IconGoogle": { Native: IconGoogle, Web: IconGoogleW },

        "IconMenuBg": { Native: IconGoogle, Web: IconGoogleW },
        "IconMenuCasa": { Native: IconGoogle, Web: IconGoogleW },
        "IconMenuCondominio": { Native: IconGoogle, Web: IconGoogleW },
        "IconMenuEdificio": { Native: IconGoogle, Web: IconGoogleW },
        "IconMenuMotel": { Native: IconGoogle, Web: IconGoogleW },

    }
}

export default Assets;