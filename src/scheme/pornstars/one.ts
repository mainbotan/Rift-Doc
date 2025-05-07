
// schema
import { PornstarSchema } from "./schema";

export const Pornstar = PornstarSchema.parse({
    id_name: 'julie-jess',
    full_name: 'Julie Jess',
    avatar: 'https://ei.phncdn.com/(m=bLWsSeKlbyaT)(mh=wOE8EHapaw2sjGxT)1958f3f3-e3df-4af2-918a-6857a8f042ca.jpg',
    header: 'https://ei.phncdn.com/pics/users/0014/9523/2871/cover30141125/(m=eRSa4qFxcWaAb)(mh=Wf2MX_Wlq18b_8Ms)1323x270.jpg',
    link: {
        site: 'https://www.pornhub.com/model/julie-jess',
        twitter: 'https://twitter.com/juliejess69',
        instagram: 'https://www.instagram.com/juliejessofficial',
    },
    rank: {
        current: 56,
        weekly: 40,
        monthly: 56,
        last_month: 56,
        yearly: 66,
    },
    views: {
        videos: 307364720,
        profile: 96783364,
    },
    property: {
        relationship_status: 'single',
        interested_in: 'guys and girls',
        gender: 'couple',
        birth_place: 'Russia',
        height_cm: '175',
        tatoos: 'yes',
        piercings: 'yep',
    },
    videos_watched: 1084,
    subscribers: 556000,
});