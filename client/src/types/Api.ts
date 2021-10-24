export type ConnectionState =  'idle' | 'pending' | 'rejected' | 'resolved'

export type GlobalApiTemplateType<T> = {
    status: ConnectionState,
    error?: any;
    data?: T;
};

