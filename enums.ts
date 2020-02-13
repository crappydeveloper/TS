enum Membership { // создает объект с 6 ключами ('0','1','2', 'Simple', 'Standart', 'Premium');
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard; // 1
const membershipReversed = Membership[2]; // Premium

enum SocialMedia { // можно сказать, простой объект
    VK = 'VKONTAKTE',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;
console.log(social);