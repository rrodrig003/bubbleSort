describe('Bubble Sort', function() {
    let testArr;
    beforeEach(() => {
        testArr = [22, 19, 33, 21];
        spyOn(window, 'bubbleSort').and.callThrough();
        spyOn(window, 'swap').and.callThrough();
        spyOn(window, 'compare').and.callThrough();
    })

    it('handles an empty testArray', function() {
        expect(bubbleSort([])).toEqual([]);
    });

    it('expect bubbleSort to fully sort', function() {
        // testArr = [22, 19, 33, 21]
    
        expect(bubbleSort(testArr)).toEqual([19, 21, 22, 33]);

        expect(bubbleSort([9,6,3,2,5,8,7,4,1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    });

    it('how many times swap is called', function() {
        bubbleSort(testArr)
        expect(swap.calls.count()).toEqual(3);
    });

    it('how many times compare is called', function() {
        bubbleSort(testArr)
        expect(compare.calls.count()).toEqual(9);
    });
})