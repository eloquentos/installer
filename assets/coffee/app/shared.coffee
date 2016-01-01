installer.service 'shared', ->
    data = {}

    {
        get: (item) ->
            return data[item]

        set: (item, value) ->
            return data[item] = value
    }
