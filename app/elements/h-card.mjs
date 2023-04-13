/** @type {import('@enhance/types').EnhanceElemFn} */
export default function HCard({ html, state: { attrs } }) {
  const {
    name,
    honorificPrefix,
    givenName,
    additionalName,
    familyName,
    sortString,
    honorificSuffix,
    email,
    logo,
    photo,
    url,
    uid,
    category,
    adr,
    postOfficeBox,
    streetAddress,
    extendedAddress,
    locality,
    region,
    postalCode,
    countryName,
    label,
    geo,
    latitude,
    longitude,
    altitude,
    tel,
    note,
    bday,
    key,
    org,
    jobTitle,
    role,
    impp,
    sex,
    genderIdentity,
    anniversary } = attrs
  return html`
    <div class="h-card">
      ${name ? `<span class="p-name">${name}</span>` : '' }
      ${honorificPrefix ? `<span class="p-honorific-prefix">${honorificPrefix}</span>` : '' }
      ${givenName ? `<span class="p-given-name">${givenName}</span>` : '' }
      ${additionalName ? `<span class="p-additional-name">${additionalName}</span>` : '' }
      ${familyName ? `<span class="p-family-name">${familyName}</span>` : '' }
      ${sortString ? `<span class="p-sort-string">${sortString}</span>` : '' }
      ${honorificSuffix ? `<span class="p-nahonorific-suffix">${honorificSuffix}</span>` : '' }
      ${email ? `<a class="u-email" href="mailto:${email}">e-mail</a>` : '' }
      ${logo ? `<a class="u-logo" href="${logo}">logo</a>` : '' }
      ${photo ? `<img class="u-photo" src="${photo}"/>` : '' }
      ${url ? `<a class="u-url" href="${url}">url</a>` : '' }
      ${uid ? `<a class="u-uid" href="${uid}">uid</a>` : '' }
      ${category ? `<span class="p-category">${category}</span>` : '' }
      ${adr ? `<span class="p-adr">${adr}</span>` : '' }
      ${postOfficeBox ? `<span class="p-post-office-box">${postOfficeBox}</span>` : '' }
      ${streetAddress ? `<span class="p-street-address">${streetAddress}</span>` : '' }
      ${extendedAddress ? `<span class="p-extended-address">${extendedAddress}</span>` : '' }
      ${locality ? `<span class="p-locality">${locality}</span>` : '' }
      ${region ? `<span class="p-region">${region}</span>` : '' }
      ${postalCode ? `<span class="p-postal-code">${postalCode}</span>` : '' }
      ${countryName ? `<span class="p-country-name">${countryName}</span>` : '' }
      ${label ? `<span class="p-label">${label}</span>` : '' }
      ${geo ? `<span class="p-geo">${geo}</span>` : '' }
      ${latitude ? `<span class="p-latitude">${latitude}</span>` : '' }
      ${longitude ? `<span class="p-longitude">${longitude}</span>` : '' }
      ${altitude ? `<span class="p-altitude">${altitude}</span>` : '' }
      ${tel ? `<span class="p-tel">${tel}</span>` : '' }
      ${note ? `<span class="p-note">${note}</span>` : '' }
      ${bday ? `<time class="dt-bday">${bday}</time> birthday` : '' }
      ${key ? `<a class="u-key" href="${key}">key</a>` : '' }
      ${org ? `<span class="p-org">${org}</span>` : '' }
      ${jobTitle ? `<span class="p-job-title">${jobTitle}</span>` : '' }
      ${role ? `<span class="p-role">${role}</span>` : '' }
      ${impp ? `<a class="u-impp" href="${impp}">impp</a>` : '' }
      ${sex ? `<span class="p-sex">${sex}</span>` : '' }
      ${genderIdentity ? `<span class="p-gender-identity">${genderIdentity}</span>` : '' }
      ${anniversary ? `<time class="dt-anniversary">${anniversary}</time> anniversary` : '' }
      <slot name="adr"></slot>
      <slot name="geo"></slot>
      <slot name="org"></slot>
    </div>
  `
}
