module.exports = {
    $id:'mySchema',
    
    body: {
      type: 'object',
      properties: {
        someKey: { type: 'string' },
        someOtherKey: { type: 'number' }
      }
    },
  
    querystring: {
      name: { type: 'string' },
      excitement: { type: 'integer' }
    },
  
    params: {
      type: 'object',
      properties: {
        par1: { type: 'string' },
        par2: { type: 'number' }
      }
    },
  
    headers: {
      type: 'object',
      properties: {
        'x-foo': { type: 'string' }
      },
      required: ['x-foo']
    }
  }