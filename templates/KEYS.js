export const KEYS = {
    USER: [{key: 'pic', type: 'image', label: 'S', visible: false}, {
        key: 'about', type: 'image', label: 'Sobre', visible: true
    }, {key: 'user_email', type: 'string', label: 'Email', visible: true}, {
        key: 'name', type: 'string', label: 'Nome', visible: true
    },],
    AD: [{key: 'id', type: 'number', label: 'ID', visible: false}, {
        key: 'denomination', type: 'string', label: 'Denominação', visible: true
    }, {key: 'description', type: 'string', label: 'Descrição', visible: true},

        {key: 'server', type: 'string', label: 'Servidor', visible: true}, {
            key: 'filter', type: 'string', label: 'Filtro', visible: true
        }, {key: 'base', type: 'string', label: 'Base', visible: true}, {
            key: 'attr', type: 'string', label: 'Atributos', visible: true
        },],

    PRIVILEGE: [{key: 'id', type: 'number', label: 'ID', visible: false}, {
        key: 'denomination', type: 'string', label: 'Denominação', visible: true
    }, {key: 'description', type: 'string', label: 'Descrição', visible: true},],
    ENDPOINT: [{key: 'url', type: 'string', label: 'URL', visible: true}, {
        key: 'require_auth', type: 'bool', label: 'Requer autenticação', visible: true
    }, {key: 'denomination', type: 'string', label: 'Denominação', visible: true}, {
        key: 'description', type: 'string', label: 'Descrição', visible: true
    },

    ],
    ENDPOINT_PRIVILEGE: [{label: 'Método', key: 'method', type: 'string', visible: true}, {
        label: 'Endpoint', key: 'endpoint', type: 'object', visible: true, subfieldKey: 'url', subType: 'string'
    }, {
        label: 'Privilégio',
        key: 'privilege',
        type: 'object',
        visible: true,
        subfieldKey: 'denomination',
        subType: 'string'
    },],
    USER_PRIVILEGE: [{
        label: 'Usuário', key: 'user', type: 'object', visible: true, subfieldKey: 'name', subType: 'string'
    }, {
        label: 'Usuário Email', key: 'user', type: 'object', visible: true, subfieldKey: 'user_email', subType: 'string'
    }, {
        label: 'Privilégio',
        key: 'privilege',
        type: 'object',
        visible: true,
        subfieldKey: 'denomination',
        subType: 'string'
    }]

}