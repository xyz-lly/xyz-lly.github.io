c = open('index.html', 'r', encoding='utf-8').read()

# Find slider input handler
idx = c.find("slider.addEventListener('input'")
print('Slider at:', idx)
if idx >= 0:
    print(repr(c[idx:idx+200]))

print()

# Find document.addEventListener('touchmove'
idx2 = c.find("document.addEventListener('touchmove'")
print('document touchmove at:', idx2)
if idx2 >= 0:
    end = c.find(');', idx2)
    print(repr(c[idx2:end+2]))

# Find area.addEventListener('touchmove'
idx3 = c.find("area.addEventListener('touchmove'")
print('area touchmove at:', idx3)
if idx3 >= 0:
    end = c.find(');', idx3)
    print(repr(c[idx3:end+2]))
