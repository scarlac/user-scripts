/* ==UserStyle==
@name        Remove consent banner
@description Removes large consent banner from stackoverflow and siblings, because apparently it just reappears non stop regardless of interactions with it.
@match       https://*.serverfault.com/*
@match       https://*.stackoverflow.com/*
@match       https://*.stackexchange.com/*
==/UserStyle== */

.js-dismissable-hero,
.js-consent-banner { display: none !important }
