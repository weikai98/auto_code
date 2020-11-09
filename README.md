# 根目录下创建 prompt-config.json 
## body 匹配内容
## describe 内容描述
```json
{	
	"bar": {
		"body": "<mu-bar cellspacing></mu-bar>",
		"describe": ""
	},
	"button": {
		"body": [
			"<mu-button",
			"button-type=\"normal\"",
			"button-style=\"text\"",
			"button-shape=\"round\"",
			"icon-class=\"\"",
			"@click=\"\"></mu-button>"
		],
		"describe": "type:normal | primary | submit | danger; style: outline | link"
	},
	"editor": {
		"body": [
			"<mu-editor",
			"></mu-editor>"
		],
		"describe": ""
	},
	"calendar": {
		"body": [
			"<mu-calendar",
                          "language=\"en\"",
                          "v-model=\"\"",
                          "select-mode='date'",
                          ":range-start=\"rangeStart\"",
                          ":range-end=\"rangeEnd\"",
                          ":marked-dates = \"markedDates\"",
                          "style=\"height: 400px; width: 600px;\">",
    	                 "</mu-calendar>"
		],
		"describe": ""
	}
}
```
