import NodeCache from 'node-cache';

class CacheManager {
    private static instance: CacheManager;
    private cache: NodeCache;

    private constructor(ttlSeconds: number = 3600) {
        // Initialize NodeCache with default TTL of 1 hour
        this.cache = new NodeCache({
            stdTTL: ttlSeconds,
            checkperiod: ttlSeconds * 0.2, // Check for expired keys at 20% of TTL
            useClones: false // Don't clone objects on get/set for better performance
        });
    }

    // Getter for the singleton instance
    public static getInstance(ttlSeconds?: number): CacheManager {
        if (!CacheManager.instance) {
            CacheManager.instance = new CacheManager(ttlSeconds);
        }
        return CacheManager.instance;
    }

    // Set a value in cache with optional TTL
    public set<T>(key: string, value: T, ttl?: number): boolean {
        return this.cache.set(key, value, ttl as number);
    }

    // Get a value from cache
    public get<T>(key: string): T | undefined {
        return this.cache.get<T>(key);
    }

    // Get multiple values from cache
    public getMultiple<T>(keys: string[]): { [key: string]: T } {
        return this.cache.mget<T>(keys);
    }

    // Delete a value from cache
    public delete(key: string | string[]): number {
        return this.cache.del(key);
    }

    // Check if key exists in cache
    public has(key: string): boolean {
        return this.cache.has(key);
    }

    // Clear all keys from cache
    public flush(): void {
        this.cache.flushAll();
    }

    // Get cache statistics
    public getStats(): NodeCache.Stats {
        return this.cache.getStats();
    }

    // Get all keys in cache
    public getKeys(): string[] {
        return this.cache.keys();
    }

    // Set multiple key-value pairs at once
    public setMultiple<T>(data: { [key: string]: T }, ttl?: number): boolean {
        return this.cache.mset(
            Object.entries(data).map(([key, value]) => ({
                key,
                val: value,
                ttl
            }))
        );
    }
}

export default CacheManager;