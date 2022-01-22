import { SAssets } from 'servisofts-component'

import Logo, { ReactComponent as LogoW } from './svg/bateonIcon.svg';
import BateonBox, { ReactComponent as BateonBoxW } from './svg/bateonBox.svg';
import Mail, { ReactComponent as MailW } from './svg/Mail.svg';
import Bg1, { ReactComponent as Bg1W } from './svg/Bg1.svg';


import IconFaceb, { ReactComponent as IconFacebW } from './svg/iconFaceb.svg';
import IconGoogle, { ReactComponent as IconGoogleW } from './svg/iconGoogle.svg';


const Assets: SAssets = {
    svg: {
        "Logo": { Native: Logo, Web: LogoW },
        "BateonBox": { Native: BateonBox, Web: BateonBoxW },
        "Mail": { Native: Mail, Web: MailW },
        "Bg1": { Native: Bg1, Web: Bg1W },


        "IconFaceb": { Native: IconFaceb, Web: IconFacebW },
        "IconGoogle": { Native: IconGoogle, Web: IconGoogleW },


    }
}

export default Assets;