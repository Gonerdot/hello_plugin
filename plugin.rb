# hello_plugin/plugin.rb

# Название плагина и его описание
# Включение плагина на всех страницах
# Загрузка JavaScript и CSS файлов плагина

register_asset "javascripts/hello.js", :client
register_asset "stylesheets/hello.css", :client