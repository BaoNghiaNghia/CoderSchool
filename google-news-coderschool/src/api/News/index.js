import { NEWS_V2_ENDPOINT } from './endpoints'
import ApiFactory from '../ApiFactory'
import { GOOGLE_NEW_API_ROOT } from '../../utils/const'

const NewV2Api = new ApiFactory({url: GOOGLE_NEW_API_ROOT });

NewV2Api.createEntities([
  { name: NEWS_V2_ENDPOINT }
]);

const fetchTopHeadlines = (data) => NewV2Api.createEntities[NEWS_V2_ENDPOINT].get(data)

export {
    fetchTopHeadlines
}
