import api, { fetchJSON, postJSON, patchJSON } from './init'

export function listWithType({ owner, type }) {
  return fetchJSON(`/1/@${owner.type}/${owner.id}/items/type:${type}`)
}

export function countWithType({ owner, type }) {
  return fetchJSON(`/1/@${owner.type}/${owner.id}/items/type:${type}:count`)
	.then(({ count }) => count)
}

export function readItem({ owner, type, id }) {
	console.log('readItem', owner, type, id)
	const path = !!owner ? (
		`/1/@${owner.type}/${owner.id}/items/type:${type}/${id}`
	) : (
		`/1/@${type}/${id}`
	)
  return fetchJSON(path)
}

export function createItem({ owner, type, contentJSON, name }) {
  return postJSON(`/1/@${owner.type}/${owner.id}/items/type:${type}`, {
		contentJSON,
		name
	})
}

export function updateItem({ owner, type, id, contentJSON, name, previewDestination }) {
  return patchJSON(`/1/@${owner.type}/${owner.id}/items/type:${type}/${id}`, {
		contentJSON,
		name,
		previewDestination
	})
}

export function deleteItem({ owner, type, id }) {
  return api.delete(`/1/@${owner.type}/${owner.id}/items/type:${type}/${id}`)
}