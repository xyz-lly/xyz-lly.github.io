c = open('index.html', 'r', encoding='utf-8').read()

# Find key positions
for keyword in ['willChange', 'will-change', 'cropImg.style.left', 'cropImg.style.willChange', 'zoomThrottle']:
    idx = c.find(keyword)
    if idx >= 0:
        print(f'{keyword}: found at {idx}')
    else:
        print(f'{keyword}: NOT FOUND')

# Check if willChange was already added
if 'willChange' in c:
    idx2 = c.find('willChange')
    print(f'Context: {repr(c[idx2-40:idx2+40])}')
