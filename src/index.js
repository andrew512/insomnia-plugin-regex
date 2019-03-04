module.exports.templateTags = [{
    name: 'regex',
    displayName: 'Regex',
    description: 'Extract a value via regular expression',
    args: [
        {
            displayName: 'Value',
            type: 'string'
        },
        {
            displayName: 'Pattern',
            type: 'string'
        },
        {
            displayName: 'Match Index',
            type: 'number'
        }
    ],
    async run(context, value = '', pattern = '', matchIndex = 0) {        
        if (!value) {
            return value
        }
        if (matchIndex < 0) {
            throw new Error(`Match Index must be greater than or equal to 0.`)
        }
        if (!pattern) {
            throw new Error(`Pattern cannot be empty.`)
        }
        const match = value.match(pattern)
        if (!match) {
            throw new Error(`Pattern not found in value "${value}".`)
        }
        if (match.length > matchIndex) {
            return match[matchIndex]
        }
        throw new Error(`Desired Match Index ${matchIndex} exceeds actual maximum match index ${match.length - 1}.`)
    }
}]
