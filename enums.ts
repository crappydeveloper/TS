enum Membership { // по факту создает объект с 6 ключми ('0','1','2', Simple, Standart, Premium);
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard; // 1
const membershipReversed = Membership[2]; // Premium

enum SocialMedia {
    VK = 'VKONTAKTE',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;
console.log(social);