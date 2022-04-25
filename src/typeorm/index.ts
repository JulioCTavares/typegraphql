import {createConnection} from 'typeorm';

const connection = async () => await createConnection();

export default connection