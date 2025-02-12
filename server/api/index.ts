export default defineEventHandler(async (event) => {
  const { $DurableObject } = event.context.cloudflare.env
  const id = $DurableObject.idFromName('test')
  const stub = $DurableObject.get(id)
  
  return {
    id,
  }
})
