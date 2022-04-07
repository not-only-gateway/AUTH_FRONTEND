import getQuery from "../ext/getQuery";
import {KEYS} from "./KEYS";

export const AD = [
    {

        title: 'Informações básicas',
        groups: '2',
        rowGap: '4px',
        columnGap: '16px',
        inputs: [
            {
                label: 'Denominação',
                placeHolder: 'Denominação',
                required: true,
                disabled: false,
                key: 'denomination',
                type: 'text',
                width: '100%',
            },
            {
                label: 'Descrição',
                placeHolder: 'Descrição',
                required: true,
                disabled: false,
                key: 'description',
                customProps: {
                    variant: 'area'
                },
                type: 'text',
                width: '100%',
            }
        ]
    },
    {

        title: 'Conexão e mapeamento',
        groups: '2 2',
        rowGap: '4px',
        columnGap: '16px',
        inputs: [
            {
                label: 'Servidor',
                placeHolder: 'Servidor',
                required: true,
                disabled: false,
                key: 'server',
                type: 'text',
                width: '100%',
            },
            {
                label: 'Filtro',
                placeHolder: 'Filtro',
                required: true,
                disabled: false,
                key: 'filter',
                type: 'text',
                width: '100%',
            },
            {
                label: 'Base',
                placeHolder: 'Base',
                required: true,
                disabled: false,
                key: 'base',
                type: 'text',
                width: '100%',
            },
            {
                label: 'Atributos',
                placeHolder: 'Atributos',
                required: true,
                disabled: false,
                key: 'attr',
                type: 'text',
                width: '100%'
            }

        ]
    }

]
export const ENDPOINT = [
    {

        title: 'Informações básicas',
        groups: '1',
        rowGap: '4px',
        columnGap: '16px',
        inputs: [

            {
                label: 'Denominação',
                placeHolder: 'Denominação',
                required: true,
                disabled: false,
                key: 'denomination',
                type: 'text',
                width: '100%',
            },
            {
                label: 'Descrição',
                placeHolder: 'Descrição',
                required: true,
                disabled: false,
                key: 'description',
                customProps: {
                    variant: 'area'
                },
                type: 'text',
                width: '100%',
            }
        ]
    },
    {

        title: 'Conexão e requisitos',
        groups: '1',
        rowGap: '4px',
        columnGap: '16px',
        inputs: [
            {
                label: 'URL',
                placeHolder: 'URL',
                required: true,
                disabled: false,
                key: 'url',
                type: 'text',
                width: '100%',
                customProps: {
                    helperText: 'Sem atributos de URL'
                }
            },
            {
                label: 'Requer autenticação',
                placeHolder: 'Requer autenticação',
                required: true,
                disabled: false,
                key: 'require_auth',
                type: 'check',
                width: '100%',
            }
        ]
    }]
export const ENDPOINT_ACCESS = [{

    title: 'Relação',
    groups: '1 2',
    rowGap: '4px',
    columnGap: '16px',
    inputs: [
        {
            label: 'Método HTTP',
            placeHolder: 'Método HTTP',
            required: true,
            disabled: false,
            key: 'method',
            type: 'select',
            customProps: {
                choices: [
                    {key: 'GET', value: 'GET'},
                    {key: 'POST', value: 'POST'},
                    {key: 'PUT', value: 'PUT'},
                    {key: 'DELETE', value: 'DELETE'},
                    {key: 'PATCH', value: 'PATCH'}
                ]
            },
            width: '100%',
        },
        {
            label: 'Endpoint',
            placeHolder: 'Endpoint',
            required: true,
            disabled: false,
            key: 'endpoint',
            keys: KEYS.ENDPOINT,
            query: getQuery('endpoint'),
            type: 'custom',
            width: '100%',
        },
        {
            label: 'Privilégio',
            placeHolder: 'Privilégio',
            required: true,
            disabled: false,
            key: 'privilege',
            keys: KEYS.PRIVILEGE,
            query: getQuery('privilege'),
            type: 'custom',
            width: '100%',
        },
    ]
}]
export const PRIVILEGE = [ {

    title: 'Informações básicas',
    groups: '1',
    rowGap: '4px',
    columnGap: '16px',
    inputs: [

        {
            label: 'Denominação',
            placeHolder: 'Denominação',
            required: true,
            disabled: false,
            key: 'denomination',
            type: 'text',
            width: '100%',
        },
        {
            label: 'Descrição',
            placeHolder: 'Descrição',
            required: true,
            disabled: false,
            key: 'description',
            customProps: {
                variant: 'area'
            },
            type: 'text',
            width: '100%',
        }
    ]
}]
export const USER = [ {

    title: 'Sobre você',
    groups: '1 2',
    rowGap: '4px',
    columnGap: '16px',
    inputs: [

        {
            label: 'Imagem',
            placeHolder: 'Imagem',
            required: true,
            disabled: false,
            key: 'pic',
            type: 'file',
            customProps: {
                accept: ['png', 'jpeg', 'jpg'],
                maxFiles: 1,
            },
            width: '100%',
        },
        {
            label: 'Nome',
            placeHolder: 'Nome',
            required: true,
            disabled: false,
            key: 'name',

            type: 'text',
            width: '100%',
        },
        {
            label: 'Sobre',
            placeHolder: 'Sobre',
            required: true,
            disabled: false,
            key: 'about',
            customProps: {
                variant: 'area'
            },
            type: 'text',
            width: '100%',
        }
    ]
}]
export const USER_PRIVILEGE = [ {

    title: 'Relação',
    groups: '2',
    rowGap: '4px',
    columnGap: '16px',
    inputs: [
        {
            label: 'Usuário',
            placeHolder: 'Usuário',
            required: true,
            disabled: false,
            key: 'user',
            keys: KEYS.ENDPOINT,
            query: getQuery('user'),
            type: 'custom',
            width: '100%',
        },
        {
            label: 'Privilégio',
            placeHolder: 'Privilégio',
            required: true,
            disabled: false,
            key: 'privilege',
            keys: KEYS.PRIVILEGE,
            query: getQuery('privilege'),
            type: 'custom',
            width: '100%',
        },
    ]
}]
