
// Replace local merchItems array with a fetch function for Sanity
const SANITY_PROJECT_ID = 'vrrwwb5o';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2023-03-22';
const SANITY_API_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;

const MERCH_QUERY = encodeURIComponent(`*[_type == "merch"]{..., _id, _createdAt}`);

export async function fetchMerchItems() {
  const url = `${SANITY_API_URL}?query=${MERCH_QUERY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch merch items from Sanity');
  const data = await res.json();
  return data.result;
}
