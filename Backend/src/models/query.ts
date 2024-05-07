import { prop, getModelForClass, Ref} from '@typegoose/typegoose';
import { IArticle } from './article';

export class Query {
    @prop({ required: true })
    userQuestion!: string;

    @prop({ required: true })
    aiResponse!: string;

    @prop({ ref: () => IArticle})
    article!: Ref<IArticle>;
}

const QueryModel = getModelForClass(Query);

export default QueryModel;
