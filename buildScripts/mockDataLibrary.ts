export const magSchema: object = {
    Virtual: {
        incrementalId: 1,
        virtual: true,
    },
    id: {
        function: function jeff() {
            return this.object.Virtual;
        },
    },
    title: {
        faker: 'name.title',
    },
    author: {
        casual: 'full_name',
    },
    available: {
        casual: 'coin_flip',
    },
    category: {
        static: 5,
    },
};

export const bookSchema: object = {
        Virtual: {
        incrementalId: 1,
        virtual: true,
    },
    id: {
        function: function jeff() {
            return this.object.Virtual;
        },
    },
    title: {
        faker: 'name.title',
    },
    author: {
        casual: 'full_name',
    },
    available: {
        casual: 'coin_flip',
    },
    category: {
        static: 5,
    },
};
