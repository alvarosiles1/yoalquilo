import { SPageListProps } from 'servisofts-component'

const ServiceName = "yoalquilo";


import empresa from './Components/empresa';
const Pages: SPageListProps = {
    ...empresa.Pages
}

const Reducers = {
    ...empresa.Reducers
}

export default {
    ServiceName,
    Pages,
    Reducers,
};