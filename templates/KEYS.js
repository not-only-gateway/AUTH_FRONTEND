export const KEYS = {
    USER: [
        // {key: 'id', type: 'number', label: 'ID', visible: true},
        {key: 'name', type: 'string', label: 'Nome', visible: true},
        {key: 'birth', type: 'date', label: 'Data de nascimento', visible: true},


        {key: 'registration', type: 'string', label: 'Matricula', visible: false},
        {key: 'superior', type: 'string', label: 'Superior', visible: false},
        {key: 'gender', type: 'string', label: 'Gênero', visible: false},
        {key: 'nationality', type: 'string', label: 'Nacionalidade', visible: false},
        {key: 'pne', type: 'string', label: 'PNE', visible: false},
        {key: 'admission', type: 'date', label: 'Data de admissão', visible: false},
        {key: 'extension', type: 'string', label: 'Ramal', visible: true},
        {key: 'personal_email', type: 'string', label: 'Email pessoal', visible: false},
        {key: 'email', type: 'string', label: 'Email', visible: true},
        {key: 'degree', type: 'string', label: 'Escolaridade', visible: false},
        {key: 'unit', type: 'object', subfieldKey: 'acronym', label: 'Unidade', visible: true}
    ],
    AD: [
        {key: 'id', type: 'number', label: 'ID', visible: false},
        {key: 'classification', type: 'string', label: 'Classificação', visible: true},
        {key: 'level', type: 'string', label: 'Nível', visible: true},
        {key: 'name', type: 'string', label: 'Nome', visible: true},

        {key: 'quantity', type: 'number', label: 'Quantidade', visible: false},
        {key: 'unitary_value', type: 'number', label: 'Valor unitário', visible: false},
    ],

    PRIVILEGE: [
        {key: 'id', type: 'number', label: 'ID', visible: false},
        {key: 'denomination', type: 'string', label: 'Denominação', visible: true},
        {key: 'description', type: 'string', label: 'Descrição', visible: true},
    ],
    ENDPOINT: [
        {key: 'url', type: 'string', label: 'URL', visible: true},
        {key: 'require_auth', type: 'bool', label: 'Requer autenticação', visible: true},
        {key: 'denomination', type: 'string', label: 'Denominação', visible: true},
        {key: 'description', type: 'string', label: 'Descrição', visible: true},

    ],
    ENDPOINT_PRIVILEGE: [
        {label: 'Método', key: 'method', type: 'string', visible: true},
        {label: 'Endpoint', key: 'endpoint', type: 'object', visible: true, subfieldKey: 'url', subType: 'string'},
        {label: 'Privilégio', key: 'privilege', type: 'object', visible: true, subfieldKey: 'denomination', subType: 'string'},
    ],
    USER_PRIVILEGE: [
        {label: 'Usuário', key: 'user', type: 'object', visible: true, subfieldKey: 'name', subType: 'string'},
        {label: 'Usuário Email', key: 'user', type: 'object', visible: true, subfieldKey: 'user_email', subType: 'string'},
        {label: 'Privilégio', key: 'privilege', type: 'object', visible: true, subfieldKey: 'denomination', subType: 'string'}
    ]

}